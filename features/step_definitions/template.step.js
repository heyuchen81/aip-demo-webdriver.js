'use strict';

var expect = require('chai').expect;
var templatePage = require('../page_objects/template.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.Given(/^This is a GIVEN scenario step$/, function(callback) {

		templatePage.load(this);
		
		callback();
	});
		
	this.When(/^This is a WHEN scenario step with text "([^"]*)" for instance$/, function(text, callback) {
		
		// Corresponding cucumber step: This is a WHEN scenario step with text "example terms" for instance
		
		console.log('Result text: ' + text);		
		// Output: Result text: example terms
		
		callback();
	});

	this.Then(/^This is a THEN scenario step with digit (\d+) for instance$/, function(num, callback) {
		
		// Corresponding cucumber step: This is a WHEN scenario step with digit 9 for instance 
		
		console.log('Result digit: ' + num);
		// Output: Result digit: 9
		
		this.driver.sleep(num * 1000);
		// Step waits for 9 seconds
		
		callback();
	});
	
};