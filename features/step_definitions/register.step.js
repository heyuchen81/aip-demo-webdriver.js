'use strict';

var expect = require('chai').expect;
var homePage = require('../page_objects/home.page.js');
var registerPage = require('../page_objects/register.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.Given(/^user is on the registration page$/, function(callback) {
		homePage.mobileLoginTreat(this);
		homePage.registerLink(this).click();
		callback();
	});
	
	this.When(/^user has completed all fields$/, function(callback) {	
		registerPage.nameBox(this).sendKeys('Xin He');
		registerPage.emailBox(this).sendKeys('emailbox');
		registerPage.emailBox2(this).sendKeys('emailbox');
		registerPage.countryDdl(this).click();
		registerPage.countryDdlOption(this).click();
		registerPage.usernameBox(this).sendKeys('xhe');		
		registerPage.passwordBox(this).sendKeys('xhe');		
		registerPage.passwordBox2(this).sendKeys('xhe');		
		registerPage.notRobot(this).click();
		callback();
	});

	this.When(/^user has waited for (\d+) seconds$/, function(waittime, callback) {
		this.driver.sleep(waittime * 1000);
		callback();
	});
	
	this.When(/^user clicks on the registration button$/, function(callback) {
		
		callback();
	});

	this.Then(/^user will be taken to the registration success page$/, function(callback) {

		callback();
	});
	
	this.Then(/^user will be taken to the not authorized page$/, function(callback) {

		callback();
	});
	
};