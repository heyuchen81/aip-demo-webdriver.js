'use strict';

var expect = require('chai').expect;
var homePage = require('../page_objects/home.page.js');
var publicationsPage = require('../page_objects/publications.page.js');
var journalPage = require('../page_objects/journal.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.Given(/^user is on "([^"]*)" journal page$/, function(jtitle, callback) {
		publicationsPage.load(this);
		publicationsPage.waitForPublicationItem(this, jtitle);
		publicationsPage.publicationItem(this, jtitle).click();		
		journalPage.pageTitle(this).then(function(ptitle) {
			expect(ptitle).to.equal(jtitle);
		});
		callback();
	});
	
	this.Given(/^user is on "([^"]*)" journal browse tab$/, function(jtitle, callback) {
		var myworld = this;	
		publicationsPage.load(this);
		publicationsPage.waitForPublicationItem(this, jtitle);
		publicationsPage.publicationItem(this, jtitle).click();		
		journalPage.pageTitle(this).then(function(ptitle) {
			expect(ptitle).to.equal(jtitle);			
			journalPage.mobileEditTreat(myworld);
			journalPage.waitForBrowseLink(myworld);
			journalPage.browseLink(myworld).click();
		});
		callback();
	});
	
	this.When(/^user clicks on the most read rss icon$/, function(callback) {		
		journalPage.waitForMostReadRssIcon(this);
		journalPage.mostReadRssIcon(this).click();		
		callback();
	});

	this.When(/^user clicks on the subscribe to email alerts link$/, function(callback) {
		var myworld = this;
		homePage.mobileLoginTreat(this);
		journalPage.checkSignInAlert(this).then(function(present) {
			expect(present).to.equal(false);					
		}).then(function() {
			journalPage.waitForSubscribeToEmailLink(myworld);
			journalPage.subscribeToEmailLink(myworld).click();
		});
		callback();
	});
	
	this.When(/^user clicks on a section rss icon$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		this.driver.sleep(5000);
		callback();
	});
	
	this.When(/^user clicks on an article title$/, function(callback) {
		journalPage.waitForContributedArticleTitle(this, 1);
		journalPage.contributedArticleTitle(this, 1).click();
		callback();
	});
	
	
	this.Then(/^the rss feed will open$/, function(callback) {
		var myworld = this;		
		this.driver.getAllWindowHandles().then(function(allhandles) {
			var newhandlerid = allhandles[allhandles.length - 1];
			myworld.driver.switchTo().window(newhandlerid);
			return myworld.driver.getCurrentUrl();
		}).then(function(url) {
			expect(url).to.contain(homePage.baseUrl() + 'mostviewed/rss.action');
			myworld.driver.close();
			return myworld.driver.getAllWindowHandles();
		}).then(function(allhandles) {
			var newhandlerid = allhandles[0];						
			myworld.driver.switchTo().window(newhandlerid);			
			return myworld.driver.getCurrentUrl();
		}).then(function(url) {
			expect(url).to.not.equal(homePage.baseUrl() + 'mostviewed/rss.action');
		});
		callback();
	});

	this.Then(/^the content alerts link will be displayed$/, function(callback) {
		var myworld = this;		
		journalPage.checkSignInAlert(this).then(function(present) {
			expect(present).to.equal(true);
			 journalPage.signInAlertClose(myworld).click();
			 return journalPage.checkSignInAlert(myworld); 
		}).then(function(present) {
			expect(present).to.equal(false);
		});
		callback();
	});

	this.Then(/^the rss feed will display for the section$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback(null, 'pending');
	});
	
};