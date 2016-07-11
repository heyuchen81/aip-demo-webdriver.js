'use strict';

var expect = require('chai').expect;
var favoritePage = require('../page_objects/favorite.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	this.When(/^user opens the my favourites page$/, function(callback) {		
		myworld.driver.getPageSource().then(function(src) {
			console.log(src);
		});		
		favoritePage.load(this);		
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