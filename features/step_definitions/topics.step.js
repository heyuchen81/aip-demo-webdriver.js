'use strict';

var expect = require('chai').expect;
var topicsPage = require('../page_objects/topics.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.Given(/^user is on topics page$/, function(callback) {
		topicsPage.load(this);
		topicsPage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Topics');
		});
		callback();
	});
	
	this.Given(/^user is on topic page "([^"]*)"$/, function(topic, callback) {
		var myworld = this;
		topicsPage.loadTopic(this, topic);
		this.driver.sleep(2000);
		topicsPage.pageTitle(this).then(function(title) {
			expect(title).to.equal(topic);
		});
		callback();
	});
	
	this.When(/^user clicks on go to topic link beside topic "([^"]*)"$/, function(topic, callback) {
		topicsPage.waitForTopicGoTo(this, topic);
		topicsPage.topicGoTo(this, topic).click();
		callback();
	});

	this.When(/^user submits a refine search with "([^"]*)"$/, function(keywords, callback) {
		topicsPage.waitForSearchRefineBox(this);
		topicsPage.searchRefineBox(this).sendKeys(keywords);
		topicsPage.searchRefineBox(this).submit();		
		callback();
	});
	
	this.When(/^user clicks the next button at the bottom of the page$/, function(callback) {
		topicsPage.waitForCurrentPageSpan(this);		
		topicsPage.checkCurrentPageSpan(this).then(function(present) {
			expect(present).to.equal(true);
		});		
		topicsPage.waitForCurrentPageSpan(this);
		topicsPage.currentPageSpan(this).getText().then(function(txt) {
			expect(txt).to.equal('1');
		});
		topicsPage.waitForNextButton(this);
		topicsPage.nextButton(this).click();
		callback();
	});
	
	this.When(/^user clicks a topic in the topic facet$/, function(callback) {
		var myworld = this;		
		var shared = {};		
		topicsPage.waitForExplanationText(this);
		topicsPage.explanationText(this).getText().then(function(txt) {
			shared.sum = topicsPage.getExplanationTextTotalNumber(txt);			
		}).then(function() {
			topicsPage.waitForFacetItem(myworld, 'topic', 3);
			return topicsPage.checkFacetItem(myworld, 'topic', 3);
		}).then(function(present) {
			expect(present).to.equal(true);
			return topicsPage.facetItem(myworld, 'topic', 3).getText();
		}).then(function(txt) {
			shared.part = topicsPage.getFacetItemNumber(txt);
		}).then(function() {
			expect(shared.sum).to.not.equal(shared.part);
			return topicsPage.checkTopicBackLink(myworld);
		}).then(function(present) {
			expect(present).to.equal(false);
			return topicsPage.checkTopicBackLink(myworld);
		}).then(function(present) {
			expect(present).to.equal(false);
			topicsPage.facetItem(myworld, 'topic', 3).click();
			myworld.driver.sleep(10000);
		}).then(function() {
			return topicsPage.explanationText(myworld).getText();
		}).then(function(txt) {
			expect(topicsPage.getExplanationTextTotalNumber(txt)).to.equal(shared.part);
		});		
		callback();
	});
	
	this.When(/^user clicks a topic in the topic facet \(mobile\)$/, function(callback) {
		var myworld = this;			
		topicsPage.waitForMobileFilterButton(myworld);
		topicsPage.mobileFilterButton(myworld).click();
		topicsPage.waitForFacetItem(myworld, 'topic', 3);
		topicsPage.facetItem(myworld, 'topic', 3).click();
		callback();
	});	

	this.When(/^user clicks the Physics Today tab$/, function(callback) {
		topicsPage.waitForPhysicsTodayTab(this);
		topicsPage.physicsTodayTab(this).click();
		callback();
	});
		
	this.When(/^user selects the authors tab$/, function(callback) {
		topicsPage.waitForAuthorsTab(this);
		topicsPage.authorsTab(this).click();
		callback();
	});
	
	this.Then(/^results are filtered by "([^"]*)"$/, function(Keywords, callback) {
		var myworld = this;
		this.driver.sleep(8000);
		topicsPage.waitForExplanationText(this);
		topicsPage.loadExplanationText_newText(this, '(About contains');
		topicsPage.explanationText(this).getText().then(function(txt) {	
			expect(txt).to.contain('(About contains ‘' + Keywords + '’)');
		});
		callback();
	});

	this.Then(/^results are filtered by topic$/, function(callback) {
		topicsPage.waitForTopicBackLink(this);
		topicsPage.checkTopicBackLink(this).then(function(present) {
			expect(present).to.equal(true);
		});		
		callback();
	});
	
	this.Then(/^results are filtered by topic \(mobile\)$/, function(callback) {
		var myworld = this;		
		topicsPage.waitForMobileBackLink(this);
		topicsPage.checkMobileBackLink(this).then(function(present) {
			expect(present).to.equal(true);			
		}).then(function() {
			topicsPage.mobileBackLink(myworld).click();
			myworld.driver.sleep(2000);
		});
		callback();
	});

	this.When(/^user clicks return to topic page results$/, function(callback) {
		topicsPage.waitForTopicSearchBack(this);
		topicsPage.topicSearchBack(this).click();		
		callback();
	});
	
	this.When(/^user selects a more specific topic "([^"]*)"$/, function(topic, callback) {
		topicsPage.mobileSpecificTopicsTreat(this);
		topicsPage.waitForMoreSpecificItem(this, topic);
		topicsPage.moreSpecificItem(this, topic).click();
		callback();
	});
	
	this.Then(/^"([^"]*)" topic page will be displayed$/, function(topic, callback) {
		topicsPage.topicTitle(this).getText().then(function(txt) {
			expect(txt).to.equal(topic);
		});
		callback();
	});
	
	this.Then(/^full topic results will be displayed$/, function(callback) {
		this.driver.sleep(8000);
		topicsPage.explanationText(this).getText().then(function(txt) {	
			expect(txt).to.not.contain('(About contains');
		});
		callback();
	});
	
	this.Then(/^the next page of results will be displayed$/, function(callback) {
		this.driver.sleep(10000);
		topicsPage.waitForCurrentPageSpan(this);
		topicsPage.loadCurrentPageSpan_newText(this, 2);
		topicsPage.currentPageSpan(this).getText().then(function(txt) {
			expect(txt).to.equal('2');
		});
		callback();
	});
	
	this.Then(/^results will also be filtered by topic$/, function(callback) {
		this.driver.sleep(5000);		
		topicsPage.loadExplanationText_newText(this, '(Content contains ‘Physics Today’)');
		topicsPage.explanationText(this).getText().then(function(txt) {	
			expect(txt).to.contain('(Content contains ‘Physics Today’)');
		});
		callback();
	});
	
	this.Then(/^authors will be displayed that are linked to the topic results$/, function(callback) {
		topicsPage.loadAuthorsTabActive(this);
		topicsPage.loadAuthor(this, 1);
		topicsPage.authorItems(this).then(function(elems) {
			expect(elems.length).to.above(0);
		});
		callback();
	});
	
	this.When(/^the new "([^"]*)" page will display$/, function(topic, callback) {
		this.driver.sleep(10000);
		topicsPage.waitForTopicHeader(this);
		topicsPage.topicHeader(this).getText().then(function(txt) {
			expect(txt).to.equal(topic);
		});
		callback();
	});
	
};