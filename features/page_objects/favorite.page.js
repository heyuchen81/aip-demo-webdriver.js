'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
	
		
	/* 
	 *    Web Elements
	 */
	
	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
	favoriteItems : function(my) {
		return my.driver.findElements({ xpath : '//*[@id="managedMarkedListCont"]/div[@class="resultItem"]' }); 
	},

	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
		my.driver.get(homePage.baseUrl() + 'markedlist/view');
	}
	
};