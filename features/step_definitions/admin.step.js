'use strict';

var expect = require('chai').expect;
var adminPage = require('../page_objects/admin.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.Given(/^user is on the site usage reports page$/, function(callback) {
		adminPage.waitForAdministrationLink(this);
		adminPage.administrationLink(this).click();
		adminPage.waitForUsageReportsLink(this);
		adminPage.usageReportsLink(this).click();
		this.driver.sleep(5000);
		adminPage.pageTitle(this).then(function(title) {
			expect(title).to.equal('Counter Reports');
		});
		callback();
	});
	
};