'use strict';

var expect = require('chai').expect;
var homePage = require('../page_objects/home.page.js');
var searchResultPage = require('../page_objects/searchResult.page.js');

module.exports = function() {
	
	this.World = require('../support/world.js').World;

	this.Given(/^user is on search results page after searching for "([^"]*)"$/, function(keywords, callback) {	
		var myworld = this;	
		homePage.mobileSearchTreat(this);
		homePage.quickSearchBox(this).sendKeys(keywords);
		this.driver.sleep(500);
		homePage.quickSearchBox(this).submit();		
		this.driver.sleep(10000);
		homePage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Search Results');
		}).then(function() {
			return searchResultPage.explanationText(myworld).getText();
		}).then(function(txt) {
			expect(txt).to.contain('(All Fields (excluding fulltext) contains ‘' + keywords + '’)');
		});
		callback();
	});
	
	this.When(/^user filters results by topic$/, function(callback) {			
		var myworld = this;		
		var shared = {};
		searchResultPage.explanationText(this).getText().then(function(txt) {
			shared.sum = searchResultPage.getExplanationTextTotalNumber(txt);			
		}).then(function() {
			return searchResultPage.checkFacetItem(myworld, 'topic', 3);
		}).then(function(present) {
			expect(present).to.equal(true);
			return searchResultPage.facetItem(myworld, 'topic', 3).getText();
		}).then(function(txt) {
			shared.part = searchResultPage.getFacetItemNumber(txt);
		}).then(function() {
			expect(shared.sum).to.not.equal(shared.part);			
		}).then(function() {
			searchResultPage.facetItem(myworld, 'topic', 3).click();
			myworld.driver.sleep(1000);
		}).then(function() {
			return searchResultPage.explanationText(myworld).getText();
		}).then(function(txt) {
			expect(searchResultPage.getExplanationTextTotalNumber(txt)).to.equal(shared.part);
		});		
		callback();
	});
	
	this.When(/^user filters results by topic \(mobile\)$/, function(callback) {			
		searchResultPage.mobileFilterButton(this).click();
		this.driver.sleep(2000);
		searchResultPage.mobileFacetCategory(this, 'topic').click();
		this.driver.sleep(2000);
		searchResultPage.mobileFacetItem(this, 3).click();
		this.driver.sleep(2000);
		callback();
	});
	
	this.When(/^user has entered performed a quick search for an author "([^"]*)"$/, function(authorname, callback) {	
		var myworld = this;	
		homePage.mobileSearchTreat(this);
		homePage.quickSearchBox(this).sendKeys(authorname);
		this.driver.sleep(500);
		homePage.quickSearchBox(this).submit();		
		homePage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Search Results');
		}).then(function() {
			return searchResultPage.explanationText(myworld).getText();
		}).then(function(txt) {
			expect(txt).to.contain('(All Fields (excluding fulltext) contains ‘' + authorname + '’)');
		});
		callback();
	});
	
	this.When(/^user removes the filter$/, function(callback) {
		var myworld = this;		
		var shared = {};
		searchResultPage.explanationText(this).getText().then(function(txt) {
			shared.part = searchResultPage.getExplanationTextTotalNumber(txt);			
		}).then(function() {			
			return searchResultPage.checkFacetCancel(myworld, 'topic');	
		}).then(function(present) {
			expect(present).to.equal(true);
			searchResultPage.facetCancel(myworld, 'topic').click();
			return searchResultPage.checkFacetItem(myworld, 'topic', 3);
		}).then(function(present) {
			expect(present).to.equal(true);
			return searchResultPage.facetItem(myworld, 'topic', 3).getText();
		}).then(function(txt) {
			expect(searchResultPage.getFacetItemNumber(txt)).to.equal(shared.part);
			return searchResultPage.explanationText(myworld).getText();
		}).then(function(txt) {
			expect(searchResultPage.getExplanationTextTotalNumber(txt)).to.not.equal(shared.part);
		});	
		callback();
	});
	
	this.When(/^user removes the filter \(mobile\)$/, function(callback) {
		searchResultPage.mobileFacetCancel(this).click();
		callback();
	});

	this.When(/^user clicks the More button at the bottom$/, function(callback) {
		var myworld = this;		
		var shared = {};
		searchResultPage.explanationText(this).getText().then(function(txt) {
			shared.sum = searchResultPage.getExplanationTextTotalNumber(txt);			
			expect(txt.startsWith('1 - 20 of ' + shared.sum + ' results,')).to.equal(true);			
		}).then(function() {
			return searchResultPage.searchResultElements(myworld);
		}).then(function(elems) {
			if (shared.sum < 20) {			
			expect(elems.length).to.equal(shared.sum);
			} else {
				expect(elems.length).to.equal(20);
			}
		}).then(function() {
			searchResultPage.seeMoreButton(myworld).click();
		});
		callback();
	});
	
	this.When(/^user sorts by Newest First$/, function(callback) {
		var myworld = this;		
		var shared = {};         
		searchResultPage.searchResultElements(this).then(function(elems) {
			expect(elems.length >= 6).to.equal(true);
		});
		searchResultPage.searchResultElementTimeSpan(this, 1).getText().then(function(spantxt) {
			shared.timearr = new Array(6);
			shared.timearr[0] = searchResultPage.getSearchResultElementTime(spantxt);	
			shared.order = 2;
		}).then(function() {
			return searchResultPage.searchResultElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = searchResultPage.getSearchResultElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return searchResultPage.searchResultElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = searchResultPage.getSearchResultElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return searchResultPage.searchResultElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = searchResultPage.getSearchResultElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return searchResultPage.searchResultElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = searchResultPage.getSearchResultElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return searchResultPage.searchResultElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = searchResultPage.getSearchResultElementTime(spantxt);
		}).then(function() {
			var originalarr = searchResultPage.cloneArray(shared.timearr);
			shared.timearr.sort(function(a, b){return b-a;}); // in descending order
			expect(searchResultPage.compareArray(originalarr, shared.timearr)).to.equal(false);
		}).then(function() {
			return searchResultPage.checkSortDesButton(myworld);
		}).then(function(present) {
			expect(present).to.equal(true);
		}).then(function() {
			searchResultPage.mobileSortTreat(myworld);
			searchResultPage.sortDesButton(myworld).click();
		});
		callback();
	});
	
	this.When(/^clicks view description for the first article$/, function(callback) {
		var myworld = this;		
		searchResultPage.searchResultElements(this).then(function(elems) {
			expect(elems.length >= 1).to.equal(true);
			return searchResultPage.searchResultElementDescription(myworld, 1).isDisplayed();
		}).then(function(displayed) {
			expect(displayed).to.equal(false);
			searchResultPage.searchResultElementViewDescription(myworld, 1).click();
		});				
		callback();
	});
	
	this.When(/^user refines their search with "([^"]*)"$/, function(keywords, callback) {
		var myworld = this;	
		var shared = {};
		searchResultPage.explanationText(this).getText().then(function(txt) {
			shared.sum = searchResultPage.getExplanationTextTotalNumber(txt);
			expect(shared.sum).to.be.above(0);
			return searchResultPage.searchResultElements(myworld);
		}).then(function(elems) {
			expect(elems.length).to.be.above(0);
		}).then(function() {
			searchResultPage.mobileEditTreat(myworld);
			searchResultPage.searchResultRefineInput(myworld).sendKeys(keywords);
			searchResultPage.searchResultRefineInput(myworld).submit();
			searchResultPage.loadExplanationText_newText(myworld, '(About contains ‘' + keywords + '’)');
		}).then(function() {
			return searchResultPage.explanationText(myworld).getText();
		}).then(function(txt) {
			expect(txt).to.contain('(About contains ‘' + keywords + '’)');
			expect(searchResultPage.getExplanationTextTotalNumber(txt)).not.equal(shared.sum);
		});
		callback();
	});
	
	this.When(/^user reviews the Physics Today tab$/, function(callback) {
		var myworld = this;	
		var shared = {};		
		searchResultPage.explanationText(this).getText().then(function(txt) {
			expect(txt).to.not.contain('(Content contains ‘Physics Today’)');
			shared.sum = searchResultPage.getExplanationTextTotalNumber(txt);
			expect(shared.sum).to.be.above(0);
			return searchResultPage.physicsTodayTab(myworld).getAttribute('class');
		}).then(function(txt) {
			expect(txt).to.not.equal('active ');
			searchResultPage.physicsTodayTab(myworld).click();	
			searchResultPage.loadExplanationText_newText(myworld, '(Content contains ‘Physics Today’)');	
			return searchResultPage.explanationText(myworld).getText();
		}).then(function(txt) {
			expect(shared.sum).to.not.equal(searchResultPage.getExplanationTextTotalNumber(txt));
		});
		callback();
	});
	
	this.When(/^user reviews the Related Databases tab$/, function(callback) {
		var myworld = this;			
		searchResultPage.checkExplanationText(this).then(function(present) {
			expect(present).to.equal(true);
			return searchResultPage.relatedDatabasesTab(myworld).getAttribute('class');
		}).then(function(txt) {
			expect(txt).to.not.equal('active ');
			return searchResultPage.checkFacetItem(myworld, 'topic', 1);
		}).then(function(present) {
			expect(present).to.equal(true);
			searchResultPage.relatedDatabasesTab(myworld).click();	
			searchResultPage.vanishExplanationText(myworld);	
		});
		callback();
	});
	
	this.When(/^user selects the author name "([^"]*)"$/, function(name, callback) {
		var myworld = this;			
		this.driver.sleep(5000);
		searchResultPage.authorLink(this, 1, name).click();
		callback();
	});
	
	this.When(/^user selects the from scitation link in the pop-up$/, function(callback) {		
		searchResultPage.citationAuthorLink(this).click();
		callback();
	});
	
	this.Then(/^full search results will be displayed$/, function(callback) {
		var myworld = this;		
		var shared = {};
		searchResultPage.explanationText(this).getText().then(function(txt) {
			shared.sum = searchResultPage.getExplanationTextTotalNumber(txt);		
			return searchResultPage.checkFacetItem(myworld, 'topic', 3);
		}).then(function(present) {
			expect(present).to.equal(true);
			return searchResultPage.facetItem(myworld, 'topic', 3).getText();
		}).then(function(txt) {
			expect(searchResultPage.getFacetItemNumber(txt)).to.not.equal(shared.sum);
		});
		callback();
	});
	
	this.Then(/^full search results will be displayed \(mobile\)$/, function(callback) {
		var myworld = this;		
		var shared = {};
		searchResultPage.explanationText(this).getText().then(function(txt) {
			shared.sum = searchResultPage.getExplanationTextTotalNumber(txt);					
		}).then(function() {
			searchResultPage.mobileFilterButton(myworld).click();
			myworld.driver.sleep(2000);
			searchResultPage.mobileFacetCategory(myworld, 'topic').click();
			myworld.driver.sleep(2000);
			return searchResultPage.mobileFacetItem(myworld, 3).getText();
		}).then(function(txt) {
			expect(searchResultPage.getFacetItemNumber(txt)).to.not.equal(shared.sum);
		});
		callback();
	});
		
	this.Then(/^20 more results will be displayed$/, function(callback) {
		var myworld = this;
		var shared = {};
		searchResultPage.explanationText(this).getText().then(function(txt) {		
			shared.sum = searchResultPage.getExplanationTextTotalNumber(txt);	
			searchResultPage.loadExplanationText_newText(myworld, '1 - 40 of ' + shared.sum + ' results,');
			return searchResultPage.explanationText(myworld).getText();
		}).then(function (txt) {			
			if (shared.sum < 40) {
				expect(txt.startsWith('1 - ' + shared.sum + ' of ' + shared.sum + ' results')).to.equal(true);
			} else {
				expect(txt.startsWith('1 - 40 of ' + shared.sum + ' results')).to.equal(true);
			}
			return searchResultPage.searchResultElements(myworld);
		}).then(function(elems) {
			if (shared.sum < 40) {			
				expect(elems.length).to.equal(shared.sum);
			} else {
				expect(elems.length).to.equal(40);
			}
		});	
		callback();
	});

	this.Then(/^the results will be sorted by date$/, function(callback) {
		this.driver.sleep(2000);
		var myworld = this;
		var shared = {};
		searchResultPage.searchResultElementTimeSpan(this, 1).getText().then(function(spantxt) {
			shared.timearr = new Array(6);
			shared.timearr[0] = searchResultPage.getSearchResultElementTime(spantxt);	
			shared.order = 2;
		}).then(function() {
			return searchResultPage.searchResultElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = searchResultPage.getSearchResultElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return searchResultPage.searchResultElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = searchResultPage.getSearchResultElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return searchResultPage.searchResultElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = searchResultPage.getSearchResultElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return searchResultPage.searchResultElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = searchResultPage.getSearchResultElementTime(spantxt);
			shared.order += 1;
		}).then(function() {
			return searchResultPage.searchResultElementTimeSpan(myworld, shared.order).getText();						
		}).then(function(spantxt) {
			shared.timearr[shared.order - 1] = searchResultPage.getSearchResultElementTime(spantxt);
		}).then(function() {
			var originalarr = searchResultPage.cloneArray(shared.timearr);
			shared.timearr.sort(function(a, b){return b-a;}); // in descending order
			expect(searchResultPage.compareArray(originalarr, shared.timearr)).to.equal(true);
		}).then(function() {
			return searchResultPage.checkSortDesButton(myworld);
		}).then(function(present) {
			expect(present).to.equal(false);
		});		
		callback();
	});
	
	this.Then(/^the description will be displayed$/, function(callback) {
		var myworld = this;
		searchResultPage.searchResultElements(this).then(function(elems) {
			expect(elems.length >= 1).to.equal(true);
			return searchResultPage.searchResultElementDescription(myworld, 1).isDisplayed();
		}).then(function(displayed) {
			expect(displayed).to.equal(true);
		});			
		callback();
	});
	
	this.Then(/^refined search results will be displayed$/, function(callback) {
		var myworld = this;
		var shared = {};
		searchResultPage.explanationText(this).getText().then(function(txt) {
			shared.part = searchResultPage.getExplanationTextTotalNumber(txt);
			return searchResultPage.searchResultElements(myworld);
		}).then(function(elems) {
			if (shared.part > 20) {
				expect(elems.length).to.equal(20);
			} else {
				expect(elems.length).equal(shared.part);
			}
		});
		callback();
	});
	
	this.Then(/^results are displayed for physics today$/, function(callback) {
		var myworld = this;			
		searchResultPage.explanationText(this).getText().then(function(txt) {
			expect(txt).to.contain('(Content contains ‘Physics Today’)');
			return searchResultPage.physicsTodayTab(myworld).getAttribute('class');
		}).then(function(txt) {
			expect(txt).to.equal('active ');
		});	
		callback();
	});
	
	this.Then(/^results are displayed for related databases$/, function(callback) {
		var myworld = this;			
		searchResultPage.checkExplanationText(this).then(function(present) {
			expect(present).to.equal(false);
			return searchResultPage.relatedDatabasesTab(myworld).getAttribute('class');
		}).then(function(txt) {
			expect(txt).to.equal('active ');	
			return searchResultPage.checkFacetItem(myworld, 'topic', 1);
		}).then(function(present) {
			expect(present).to.equal(false);
		});
		callback();
	});

};