'use strict';

var expect = require('chai').expect;
var homePage = require('../page_objects/home.page.js');
var reportsPage = require('../page_objects/reports.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

		
	this.When(/^user selects a report$/, function(callback) {	
		reportsPage.reportCheckBox(this, 2).click();
		callback();
	});
	
	this.When(/^user completes mandatory fields$/, function(callback) {
		reportsPage.loadEmailBox(this);
		reportsPage.emailBox(this).clear();
		reportsPage.emailBox(this).sendKeys('xin.he@ingenta.com');
		reportsPage.startMonthDdl(this).click();
		reportsPage.startMonthDdlOption(this, 12).click();
		reportsPage.startYearDdl(this).click();
		reportsPage.startYearDdlOption(this, 2012).click();		
		reportsPage.endMonthDdl(this).click();
		reportsPage.endMonthDdlOption(this, 5).click();
		reportsPage.endYearDdl(this).click();
		reportsPage.endYearDdlOption(this, 2016).click();
		callback();
	});
	
	this.When(/^user submits the form$/, function(callback) {
		this.driver.sleep(1000);
		reportsPage.submitButton(this).click();
		callback();
	});
		
	this.Then(/^user is taken to a success page$/, function(callback) {
		var myworld = this;
		this.driver.getCurrentUrl().then(function(url) {
			expect(url).to.equal(homePage.baseUrl() + 'counterstats/emailstatistics');
			return reportsPage.content(myworld).getText();
		}).then(function(txt) {
			expect(txt).to.contain('The report you requested has been emailed to');
		});
		callback();
	});
	
};