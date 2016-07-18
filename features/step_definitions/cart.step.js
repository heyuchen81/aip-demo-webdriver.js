'use strict';

var expect = require('chai').expect;
var cartPage = require('../page_objects/cart.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;		
	
	this.When(/^user has opened the shopping cart page$/, function (callback) {
		cartPage.load(this);
        callback();
    });
	
	this.When(/^user clicks the checkout button$/, function(callback) {	
		cartPage.waitForCheckoutButton(this);
		cartPage.checkoutButton(this).click();
		callback();
	});

	this.Then(/^user will be taken to the billing address page$/, function(callback) {
		cartPage.waitForAddressHeader(this);
		cartPage.addressHeader(this).getText().then(function(txt) {
			expect(txt).to.equal('Address Confirmation');
		});
		callback();
	});
	
};