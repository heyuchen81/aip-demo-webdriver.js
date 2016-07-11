'use strict';

var expect = require('chai').expect;
var favoritePage = require('../page_objects/favorite.page.js');
var securityPage = require('../page_objects/security.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.When(/^user opens the my favourites page$/, function(callback) {		
		var myworld = this;
		this.driver.getPageSource().then(function(src) {
			console.log(src);
		}).then(function() {
			console.log('BROWSER IS: ' + myworld.browser);
			// securityPage.goThroughWarning(myworld);
		}).then(function() {
			favoritePage.load(myworld);
		});
						
		callback();
	});

	this.Then(/^there will be favourites listed$/, function(callback) {
		var myworld = this;
		favoritePage.favoriteItems(this).then(function(elems) {
			expect(elems.length).to.above(0);
		});
		callback();
	});

};