'use strict';

var expect = require('chai').expect;
var articlePage = require('../page_objects/article.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;
	
	this.Given(/^user is on an article with a price$/, function(callback) {
		articlePage.loadCertainArticle(this);
		callback();
	});
	
	this.Given(/^user is on an article page$/, function(callback) {
		articlePage.loadCertainArticle(this);
		callback();
	});

	this.Then(/^an add to favourites link is displayed$/, function(callback) {
		this.driver.sleep(2000);
		articlePage.checkAddToFavorites(this).then(function(present) {
			expect(present).to.equal(true);
		});
		callback();
	});
	
	this.Then(/^the article page will be displayed$/, function(callback) {		
		articlePage.abstractTab(this).isDisplayed().then(function(displayed) {
			expect(displayed).to.equal(true);
		});
		callback();
	});
	
};