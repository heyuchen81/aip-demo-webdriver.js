'use strict';

var expect = require('chai').expect;
var templatePage = require('../page_objects/template.simple.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.Given(/^SCENARIO STEP$/, function(callback) {
		
		callback();
	});
		
	this.When(/^SCENARIO STEP$/, function(callback) {	
		
		callback();
	});

	this.Then(/^SCENARIO STEP$/, function(callback) {
		
		callback();
	});
	
};