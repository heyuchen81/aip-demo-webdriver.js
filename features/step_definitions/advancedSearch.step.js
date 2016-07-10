'use strict';

var expect = require('chai').expect;
var advancedSearchPage = require('../page_objects/advancedSearch.page.js');
var searchResultPage = require('../page_objects/searchResult.page.js');

module.exports = function() {
	
	this.World = require('../support/world.js').World;

	this.Given(/^user is on advanced search page$/, function(callback) {	
		advancedSearchPage.load(this);
		advancedSearchPage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Advanced Search');
		});
		callback();
	});
	
	this.When(/^user enters keywords "([^"]*)" into the first field$/, function(keywords, callback) {
		advancedSearchPage.inputBox1(this).sendKeys(keywords);
		callback();
	});

	this.When(/^user enters stop words "([^"]*)" in the second field$/, function(stopwords, callback) {
		advancedSearchPage.inputBox2(this).sendKeys(stopwords);
		callback();
	});
	
	this.When(/^user clicks on the Search button$/, function(callback) {        
		advancedSearchPage.searchButton(this).click();
		callback();
	});
		
	this.When(/^user clicks on Modify Search$/, function(callback) {		
		searchResultPage.modifySearchButton(this).click();
		callback();
	});
	
	this.When(/^user clicks the Search Within Topics button$/, function(callback) {
		advancedSearchPage.searchWithinTopicsButton(this).click();
		callback();
	});
	
	this.When(/^user clicks the All Topics checkbox$/, function(callback) {
		advancedSearchPage.searchWithinTopicsItemByText(this, 'All topics').click();
		callback();
	});
	
	this.When(/^user selects some items$/, function(callback) {
		var myworld = this;	
		advancedSearchPage.loadSearchWithinTopicsItemClickable(this, 3);
		advancedSearchPage.searchWithinTopicsItemByOrder(this, 3).click();
		callback();
	});

	this.When(/^user clicks Submit & Close$/, function(callback) {
		advancedSearchPage.submitCloseButton(this).click();
		callback();
	});
	
	this.Then(/^search results page is returned$/, function(callback) {
		var myworld = this;		
		var shared = {};
		advancedSearchPage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Search Results');
			return searchResultPage.checkExplanationText(myworld);
		}).then(function(present) {
			expect(present).to.equal(true);
			return searchResultPage.explanationText(myworld).getText();
		}).then(function(txt) {
			expect(searchResultPage.getExplanationTextTotalNumber(txt)).to.be.above(0);
		});
		callback();
	});
		
	this.Then(/^user is taken to advanced search page$/, function(callback) {		
		advancedSearchPage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Advanced Search');
		});		
		callback();
	});
	
	this.Then(/^search terms "([^"]*)" are entered into the fields$/, function(keywords, callback) {		
		advancedSearchPage.inputBox1(this).getAttribute('value').then(function(txt) {
			expect(txt).to.equal(keywords);
		});
		callback();
	});

	this.Then(/^search results are displayed only for these topics$/, function(callback) {		
		var myworld = this;	
		advancedSearchPage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Search Results');
			return searchResultPage.explanationText(myworld).getText();
		}).then(function(txt) {
			expect(txt).to.contain('(Topic contains ');
		});
		callback();
	});
	
};