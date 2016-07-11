'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */

	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
	administrationLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="loginWrapper"]/ul[1]/li/a' });
	},
	
	usageReportsLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[4]/div[2]/div[2]/div/a' });
	}
	
};