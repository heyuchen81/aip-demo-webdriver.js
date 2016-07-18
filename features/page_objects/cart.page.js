'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */

	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
	checkoutButton : function(my) {
		return my.driver.findElement({ id : 'showbilling_0' }); 		
	},
	
	addressHeader : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[2]/h1' }); 			
	},
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get(homePage.baseUrl() + 'cart');
	}, 
	
	waitForCheckoutButton : function(my) {
		return my.waitForId('showbilling_0', 'Checkout Button');
	},
	
	waitForAddressHeader : function(my) {
		return my.waitForXpath('//*[@id="content"]/div[2]/h1', 'Address Header');
	}

};