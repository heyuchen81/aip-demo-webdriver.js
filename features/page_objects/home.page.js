'use strict';

module.exports = {
		
	/* 
	 *    Web Elements
	 */

	pageTitle : function(my) {
		return my.driver.getTitle();        
	},
		
	quickSearchBox : function(my) {
		return my.driver.findElement({ id : 'quickSearchBox' }); 		
	},
	
	searchToggle : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="header"]/div[@class="row"]/div/div[@class="buttons_wrapper"]/button[@data-toggle="#searchBox"]' }); 		
	},		
	
	hambergerToggle : function(my) {            
		return my.driver.findElement({ xpath : '//*[@id="header"]/div[@class="row"]/div/div[@class="buttons_wrapper"]/button[@data-toggle="#navWrapper"]' }); 		
	},

	loginToggle : function(my) {            
		return my.driver.findElement({ xpath : '//*[@id="header"]/div[@class="row"]/div/div[@class="buttons_wrapper"]/button[@data-toggle="#loginWrapper"]' }); 		
	},

	autocompleteItem : function(my, order) {
		var listorder = order + 1;
		return my.driver.findElement({ id : 'ui-id-' + listorder }); 		
	},
	
	publicationsTab : function(my) {            
		return my.driver.findElement({ xpath : '//*[@id="nav-publications"]/span' }); 		
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
//		var suname = process.env.SERVER_UNAME;
//		var spwd= process.env.SERVER_PWD;
		var suname = 'aipbeta';
		var spwd = 'tn47ghd3';
		my.driver.get('http://' + suname + ':' + spwd + '@x-aip-live-05.ingenta.com/');
	},	

	checkAutocompleteItem : function(my, order) {
		var listorder = order + 1;
		return my.driver.isElementPresent(my.webdriver.By.id('ui-id-' + listorder));	
	},
	
	loadPasswordBox : function(my) {
		var expireMessage = 'Sign-in Password Box was still not present when it should have appeared.'
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.id('signpsswd')), this.waitForTimeout() * 1000, expireMessage);			
	},
		
	showQuickSearchBox : function(my) {
		var currentPage = this;
		var expireMessage = 'Quick Search Box was still not displayed when it should have appeared.'
		my.driver.wait(function () {
	        return currentPage.quickSearchBox(my).isDisplayed().then(function (displayed) {
	            if (!displayed) return false;
	            return currentPage.quickSearchBox(my).isEnabled();
	        });
	    }, currentPage.waitForTimeout() * 1000, expireMessage);
	},
	
	showPublicationsTab : function(my) {
		var currentPage = this;
		var expireMessage = 'Publications Tab was still not displayed when it should have appeared.'
		my.driver.wait(function () {
	        return currentPage.publicationsTab(my).isDisplayed().then(function (displayed) {
	            if (!displayed) return false;
	            return currentPage.publicationsTab(my).isEnabled();
	        });
	    }, currentPage.waitForTimeout() * 1000, expireMessage);
	},
	
	showSignInUsernameBox : function(my) {
		var currentPage = this;
		var expireMessage = 'SignIn Username Box was still not displayed when it should have appeared.'
		my.driver.wait(function () {
	        return currentPage.signInUsernameBox(my).isDisplayed().then(function (displayed) {
	            if (!displayed) return false;
	            return currentPage.signInUsernameBox(my).isEnabled();
	        });
	    }, currentPage.waitForTimeout() * 1000, expireMessage);
	},
	
	
    // **********************************************************************

	/*
	 *    Utilities
	 */
	
	baseUrl : function() {
		// return 'http://x-aip-live-05.ingenta.com/';      
		return 'http://scitation.aip.org/';
	},	
		
	waitForTimeout : function() {
		return 30;      
	},
	
	mobileSearchTreat : function(my) {
		var currentPage = this;
		this.searchToggle(my).isDisplayed().then(function(displayed) {
			if (displayed) {
				currentPage.searchToggle(my).click();
				currentPage.showQuickSearchBox(my);
			}
		});
	},
	
	mobileNavBarTreat : function(my) {
		var currentPage = this;
		this.hambergerToggle(my).isDisplayed().then(function(displayed) {
			if (displayed) {
				currentPage.hambergerToggle(my).click();
				currentPage.showPublicationsTab(my);
			}
		});
	},
	
	mobileLoginTreat : function(my) {
		var currentPage = this;
		this.loginToggle(my).isDisplayed().then(function(displayed) {
			if (displayed) {
				currentPage.loginToggle(my).click();
				currentPage.showSignInUsernameBox(my);
			}
		});
	}

};