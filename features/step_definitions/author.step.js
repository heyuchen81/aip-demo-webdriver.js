'use strict';

var expect = require('chai').expect;
var authorPage = require('../page_objects/author.page.js');
var homePage = require('../page_objects/home.page.js');
var searchResultPage = require('../page_objects/searchResult.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.Given(/^user is on "([^"]*)" author page$/, function(name, callback) {
		var myworld = this;	
		homePage.mobileSearchTreat(this);
		homePage.waitForQuickSearchBox(this);
		homePage.quickSearchBox(this).sendKeys(name);
		homePage.quickSearchBox(this).submit();		
		this.driver.sleep(5000);
		homePage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Search Results');
		}).then(function() {
			searchResultPage.waitForExplanationText(myworld);
			return searchResultPage.explanationText(myworld).getText();
		}).then(function(txt) {
			expect(txt).to.contain('(All Fields (excluding fulltext) contains ‘' + name + '’)');
		}).then(function() {
			myworld.driver.sleep(5000);
			searchResultPage.authorLink(myworld, 1, name).click();
		}).then(function() {
			searchResultPage.waitForCitationAuthorLink(myworld);
			searchResultPage.citationAuthorLink(myworld).click();
			authorPage.waitForNameHeader(myworld);
			return authorPage.nameHeader(myworld).getText();
		}).then(function(txt) {
			expect(txt).to.equal(name);
		});
		callback();
	});

	this.When(/^user selects a publisher facet$/, function(callback) {
		var shared = {};
		var myworld = this;
		authorPage.waitForFacetItem(myworld, 'publisher', 1);
		authorPage.facetItems(this, 'publisher').then(function(elems) {
			expect(elems.length).to.above(1);		
		}).then(function() {
			authorPage.facetItem(myworld, 'publisher', 1).click();
		});		
		callback();
	});	

	this.When(/^user selects any publisher link$/, function(callback) {
		authorPage.waitForFacetBackLink(this, 'publisher');
		authorPage.facetBackLink(this, 'publisher').click();
		callback();
	});
		
	this.When(/^user selects newest first link$/, function(callback) {
		authorPage.newestFirstLink(this).getAttribute('class').then(function(txt) {
			expect(txt).to.equal('inactiveLink');
			if (txt.indexOf('inactiveLink') === -1) {
				authorPage.newestFirstLink(this).click();
				this.driver.sleep(2000);
			} 
		});
		callback();
	});
			
	this.When(/^user selects view all descriptions link$/, function(callback) {
		authorPage.waitForToggleAllDescriptions(this);
		authorPage.toggleAllDescriptions(this).click();
		this.driver.sleep(2000);
		callback();
	});
	
	this.When(/^user clicks the next button at the bottom of the author page$/, function(callback) {
		authorPage.waitForCurrentPageSpan(this);
		authorPage.checkCurrentPageSpan(this).then(function(present) {
			expect(present).to.equal(true);
		});		
		authorPage.currentPageSpan(this).getText().then(function(txt) {
			expect(txt).to.equal('1');
		});
		authorPage.nextButton(this).click();
		callback();
	});
	
	this.Then(/^the "([^"]*)" author page is displayed$/, function(name, callback) {
		var myworld = this;
		authorPage.waitForNameHeader(this);
		authorPage.nameHeader(this).getText().then(function(txt) {
			expect(txt).to.equal(name);
			myworld.driver.sleep(5000);
		});		
		callback();
	});
	
	this.Then(/^results are filtered by publisher$/, function(callback) {
		this.driver.sleep(2000);
		authorPage.loadFacetBackLink(this, 'publisher');
		authorPage.facetItems(this, 'publisher').then(function(elems) {
			expect(elems.length).to.equal(1);
		});	
		callback();
	});	

	this.Then(/^results are no longer filtered by this publisher$/, function(callback) {
		this.driver.sleep(2000);
		var myworld = this;                           		
		authorPage.vanishFacetBackLink(this, 'publisher');
		authorPage.facetItems(myworld, 'publisher').then(function(elems) {
			expect(elems.length).to.above(1);
		});	
		callback();
	});
	
	this.Then(/^results are sorted by date$/, function(callback) {
		var myworld = this;		
		var shared = {};         
		authorPage.authorArticleElements(this).then(function(elems) {
			expect(elems.length).to.above(5);
		});
		authorPage.waitForAuthorArticleElementTimeSpan(this, 1);
		authorPage.authorArticleElementTimeSpan(this, 1).getText().then(function(spantxt) {
			shared.timearr = new Array(6);
			shared.timearr[0] = authorPage.getAuthorArticleElementTime(spantxt);	
			shared.order = 2;
		}).then(function() {
			return authorPage.authorArticleElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = authorPage.getAuthorArticleElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return authorPage.authorArticleElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = authorPage.getAuthorArticleElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return authorPage.authorArticleElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = authorPage.getAuthorArticleElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return authorPage.authorArticleElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = authorPage.getAuthorArticleElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return authorPage.authorArticleElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = authorPage.getAuthorArticleElementTime(spantxt);
		}).then(function() {
			var originalarr = authorPage.cloneArray(shared.timearr);
			shared.timearr.sort(function(a, b){return b-a;}); // in descending order			
			expect(authorPage.compareArray(originalarr, shared.timearr)).to.equal(true);
		});
		callback();
	});
		
	this.Then(/^all descriptions on the page expand$/, function(callback) {
		this.driver.sleep(1000);
		authorPage.waitForAuthorArticleElementDescription(this, 1);
		authorPage.authorArticleElementDescription(this, 1).getAttribute('style').then(function(txt) {
			expect(txt).to.equal('display: block;');
		});
		callback();
	});
		
	this.Then(/^the next page of results will be displayed in author page$/, function(callback) {
		this.driver.sleep(2000);
		authorPage.waitForCurrentPageSpan(this);
		authorPage.currentPageSpan(this).getText().then(function(txt) {
			expect(txt).to.equal('2');
		});
		callback();
	});
	
};