'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */
		
	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
		
	publicationItem : function(my, txt) {
		return my.driver.findElement({ xpath : '//div[@id=\'listItems\']/ul/li/ul/li/div[@class=\'articleMetadata \']/div/h5/span/a[text()=\'' + txt + '\']' }); 		
	},
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get(homePage.baseUrl() + 'content/publications');
	}
	
};