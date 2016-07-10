'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */
	
	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
		
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
		my.driver.get(homePage.baseUrl() + 'myaccount');
	}
	
};