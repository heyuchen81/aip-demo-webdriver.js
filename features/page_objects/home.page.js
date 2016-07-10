'use strict';

module.exports = {
		
	/* 
	 *    Web Elements
	 */
	
	baseUrl : function() {
		return 'http://x-aip-live-05.ingenta.com/';      
		//return 'http://scitation.aip.org/';
	},	
		
	pageTitle : function(my) {
		return my.driver.getTitle();        
	},
		
	quickSearchBox : function(my) {
		return my.driver.findElement({ id : 'quickSearchBox' }); 		
	},

	autocompleteItem : function(my, order) {
		var listorder = order + 1;
		return my.driver.findElement({ id : 'ui-id-' + listorder }); 		
	},
	
	publicationsTab : function(my) {
		return my.driver.findElement({ xpath : '//div[@id=\'navbar\']/ul/li[@id=\'aip_publications\']/a/span' }); 		
	},
	
	registerLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="loginBox"]/ul/li[3]/a' }); 	
	},

	signInLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="loginBox"]/ul/li[1]/a' });
	},
	
	signInUsernameBox : function(my) {
		return my.driver.findElement({ id : 'signname' });
	},
	
	signInPasswordBox : function(my) {
		return my.driver.findElement({ id : 'signpsswd' });
	},
	
	mostCitedLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[4]/div[2]/div[2]/h3/span/a/span' });
	}, 
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
		my.driver.get(this.baseUrl());
	},
	
	loadRemote : function(my) {
		var suname = process.env.SERVER_UNAME;
		var spwd= process.env.SERVER_PWD;
		my.driver.get('http://' + suname + ':' + spwd + '@x-aip-live-05.ingenta.com/');
	},	

	checkAutocompleteItem : function(my, order) {
		var listorder = order + 1;
		return my.driver.isElementPresent(my.webdriver.By.id('ui-id-' + listorder));	
	},
	
	loadPasswordBox : function(my) {
		var expireTime = 10;
		var expireMessage = 'Sign-in Password Box was still not present when it should have appeared.'
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.id('signpsswd')), expireTime * 1000, expireMessage);			
	}
	
};