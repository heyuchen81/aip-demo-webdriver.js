'use strict';

var expect = require('chai').expect;
var homePage = require('../page_objects/home.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.Given(/^user has accessed the Scitation homepage$/, function(callback) {
		homePage.load(this);
		// homePage.loadRemote(this);
		this.driver.manage().timeouts().implicitlyWait(5000);
		homePage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Home Page');
		});		
		callback();
	});
	
	this.Given(/^user has entered a three letter string into quick search$/, function(callback) {		
		homePage.quickSearchBox(this).sendKeys('c');
		this.driver.sleep(500);
		homePage.quickSearchBox(this).sendKeys('l');
		this.driver.sleep(500);
		homePage.quickSearchBox(this).sendKeys('i');
		this.driver.sleep(5000);
		callback();
	});

	this.Given(/^user has signed in as a personal user$/, function(callback) {		
		this.driver.manage().window().setSize(1500, 1000);
		homePage.signInLink(this).click();
		homePage.signInUsernameBox(this).sendKeys('xin.he');
		homePage.signInPasswordBox(this).sendKeys('password123');
		homePage.signInUsernameBox(this).submit();
		
		this.driver.sleep(5000);
		
		
		
		callback();
	});
	
	this.Given(/^user has signed in as an admin$/, function(callback) {		
		this.driver.manage().window().setSize(1500, 1000);
		homePage.signInLink(this).click();		
		homePage.loadPasswordBox(this);
		homePage.signInUsernameBox(this).sendKeys('MarkInst2');
		homePage.signInPasswordBox(this).sendKeys('password123');
		homePage.signInUsernameBox(this).submit();
		homePage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Administration');
		});
		callback();
	});
		
	this.When(/^user selects one of the options$/, function(callback) {
		homePage.autocompleteItem(this, 2).click();
		callback();
	});
		
	this.When(/^user has clicked on the most cited rss icon$/, function(callback) {
		homePage.mostCitedLink(this).click();
		callback();
	});	
	
	this.When(/^user has clicked on the sign in link$/, function(callback) {
		
		callback();
	});
	
	this.When(/^user has entered a institutional username "([^"]*)"$/, function(uname, callback) {
		
		callback();
	});
	
	this.When(/^user has entered a "([^"]*)" password "([^"]*)"$/, function(validity, pwd, callback) {
		
		callback();
	});
	
	this.When(/^user clicks Sign In button$/, function(callback) {
		
		callback();
	});

	this.Then(/^search results page is displayed$/, function(callback) {
		homePage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Search Results');
		});
		callback();
	});
	
	this.Then(/^the rss feed will be displayed$/, function(callback) {
		var myworld = this;		
		this.driver.getAllWindowHandles().then(function(allhandles) {
			var newhandlerid = allhandles[allhandles.length - 1];
			myworld.driver.switchTo().window(newhandlerid);
			return myworld.driver.getCurrentUrl();
		}).then(function(url) {
			expect(url).to.contain(homePage.baseUrl() + 'rss/content/all/latest');
			myworld.driver.close();
			return myworld.driver.getAllWindowHandles();
		}).then(function(allhandles) {
			expect(allhandles.length).to.equal(1);
			var newhandlerid = allhandles[0];						
			myworld.driver.switchTo().window(newhandlerid);			
			return myworld.driver.getCurrentUrl();
		}).then(function(url) {
			expect(url).to.not.equal(homePage.baseUrl() + 'rss/content/all/latest');
		});
		callback();
	});
	
	this.Then(/^"([^"]*)"$/, function(outcome, callback) {
		
		callback();
	});
	
};