'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */

	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
	reportCheckBox : function(my, order) {
		return my.driver.findElement({ xpath : '//*[@id="trackdetails"]/div[@class="regInput"][' + order + ']/input' }); 	         
	},
	
	emailBox : function(my) {
		return my.driver.findElement({ id : 'orderuser' });
	},
	
	startMonthDdl : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="trackdetails"]/div[20]/select[1]' }); 
	},
	
	startMonthDdlOption : function(my, order) {
		var monStr = this.numberToString(order);
		return my.driver.findElement({ xpath : '//*[@id="trackdetails"]/div[20]/select[1]/option[@value="' + monStr + '"]' }); 
	},
	
	startYearDdl : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="trackdetails"]/div[20]/select[2]' }); 
	},
	
	startYearDdlOption : function(my, order) {
		var monStr = this.numberToString(order);
		return my.driver.findElement({ xpath : '//*[@id="trackdetails"]/div[20]/select[2]/option[@value="' + monStr + '"]' }); 
	},
	
	endMonthDdl : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="trackdetails"]/div[23]/select[1]' }); 
	},
	
	endMonthDdlOption : function(my, order) {
		var monStr = this.numberToString(order);
		return my.driver.findElement({ xpath : '//*[@id="trackdetails"]/div[23]/select[1]/option[@value="' + monStr + '"]' }); 
	},
	
	endYearDdl : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="trackdetails"]/div[23]/select[2]' }); 
	},
	
	endYearDdlOption : function(my, order) {
		var monStr = this.numberToString(order);
		return my.driver.findElement({ xpath : '//*[@id="trackdetails"]/div[23]/select[2]/option[@value="' + monStr + '"]' }); 
	},
	
	submitButton : function(my) {
		return my.driver.findElement({ id : 'trackorder' });
	},
	
	content: function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]' });
	},
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get(homePage.baseUrl() + 'counterstats/requestform');
	},
	
	loadEmailBox : function(my) {
		var expireMessage = 'Email Box was still not present when it should have appeared.'
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.id('orderuser')), homePage.waitForTimeout() * 1000, expireMessage);			
	},

	
	// **********************************************************************

	/*
	 *    Utilities
	 */
	
	numberToString : function(num) {
		var txt;
		if (num < 10) {
			txt = '0';
		} else {
			txt = '';
		}		
		return txt + num.toString();
	} 
	
};