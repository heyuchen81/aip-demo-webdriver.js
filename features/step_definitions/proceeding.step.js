'use strict';

var expect = require('chai').expect;
var homePage = require('../page_objects/home.page.js');
var publicationsPage = require('../page_objects/publications.page.js');
var proceedingPage = require('../page_objects/proceeding.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.When(/^user has clicked on the Publications link$/, function(callback) {
		homePage.publicationsTab(this).click();
		callback();
	});
	
	this.When(/^user has selected "([^"]*)"$/, function(proceedingtitle, callback) {		
		publicationsPage.publicationItem(this, proceedingtitle).click();
		callback();
	});

	this.When(/^user has selected Browse Titles$/, function(callback) {
		
		proceedingPage.loadBrowseTitlesTab(this);
		proceedingPage.browseTitlesTab(this).click();
		callback();
	});
	
	this.When(/^user has clicked on a Conference Proceeding link$/, function(callback) {
		var myworld = this;
		proceedingPage.proceedingLink(this, 3).click().then(function() {
			myworld.driver.sleep(2000);
		});
		callback();
	});

	this.When(/^user has selected a Conference Paper$/, function(callback) {
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
		proceedingPage.relatedLink(this).click();
		this.driver.sleep(10000);
		proceedingPage.relatedItems(this).then(function(elems) {
			expect(elems.length).to.above(0);
		});
		callback();
	});

};