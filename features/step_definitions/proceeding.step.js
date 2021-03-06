'use strict';

var expect = require('chai').expect;
var homePage = require('../page_objects/home.page.js');
var publicationsPage = require('../page_objects/publications.page.js');
var proceedingPage = require('../page_objects/proceeding.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.When(/^user has clicked on the Publications link$/, function(callback) {
		homePage.mobileNavBarTreat(this);
		homePage.waitForPublicationsTab(this);
		homePage.publicationsTab(this).click();
		callback();
	});
	
	this.When(/^user has selected "([^"]*)"$/, function(proceedingtitle, callback) {
		publicationsPage.waitForPublicationItem(this, proceedingtitle);
		publicationsPage.publicationItem(this, proceedingtitle).click();
		callback();
	});

	this.When(/^user has selected Browse Titles$/, function(callback) {		
		proceedingPage.mobileEditTreat(this);
		// proceedingPage.loadBrowseTitlesTab(this);
		proceedingPage.waitForBrowseTitlesTab(this);
		proceedingPage.browseTitlesTab(this).click();
		callback();
	});
	
	this.When(/^user has clicked on a Conference Proceeding link$/, function(callback) {
		var myworld = this;
		proceedingPage.waitForProceedingLink(this, 3);
		proceedingPage.proceedingLink(this, 3).click().then(function() {
			myworld.driver.sleep(2000);
		});
		callback();
	});

	this.When(/^user has selected a Conference Paper$/, function(callback) {
		proceedingPage.waitForArticleLink(this, 3);
		proceedingPage.articleLink(this, 3).click();
		callback();
	});

	this.Then(/^the conference paper will be displayed$/, function(callback) {
		proceedingPage.checkArticleTabs(this).then(function(present) {
			expect(present).to.equal(true);
		});
		callback();
	});

	this.Then(/^there will be a list of related content on the Related tab$/, function(callback) {
		proceedingPage.mobileArticleMenuTreat(this);
		proceedingPage.waitForRelatedLink(this);
		proceedingPage.relatedLink(this).click();
		this.driver.sleep(5000);
		proceedingPage.relatedItems(this).then(function(elems) {
			expect(elems.length).to.above(0);
		});
		callback();
	});

};