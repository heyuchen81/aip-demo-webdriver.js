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
		var suname = process.env.SERVER_UNAME;
		var spwd= process.env.SERVER_PWD;
		my.driver.get('http://' + suname + ':' + spwd + '@x-aip-live-05.ingenta.com/');
	},	

	waitForQuickSearchBox : function(my) {
		return my.waitForId('quickSearchBox', 'Quick Search Box');
	},
	
	waitForSearchToggle : function(my) {
		return my.waitForXpath('//*[@id="header"]/div[@class="row"]/div/div[@class="buttons_wrapper"]/button[@data-toggle="#searchBox"]', 'Search Toggle');
	},

	waitForHambergerToggle : function(my) {
		return my.waitForXpath('//*[@id="header"]/div[@class="row"]/div/div[@class="buttons_wrapper"]/button[@data-toggle="#navWrapper"]', 'Hamberger Toggle');
	},

	waitForLoginToggle : function(my) {
		return my.waitForXpath('//*[@id="header"]/div[@class="row"]/div/div[@class="buttons_wrapper"]/button[@data-toggle="#loginWrapper"]', 'Login Toggle');
	},
	
	waitForAutocompleteItem : function(my, order) {
		var listorder = order + 1;
		return my.waitForId('ui-id-' + listorder, 'Autocomplete Item');
	},

	waitForPublicationsTab : function(my) {
		return my.waitForXpath('//*[@id="nav-publications"]/span', 'Publications Tab');
	},

	waitForRegisterLink : function(my) {
		return my.waitForXpath('//*[@id="loginBox"]/ul/li[3]/a', 'Register Link');
	},

	waitForSignInLink : function(my) {
		return my.waitForXpath('//*[@id="loginBox"]/ul/li[1]/a', 'Sign In Link');
	},

	waitForSignInUsernameBox : function(my) {
		return my.waitForId('signname', 'Sign In Username Box');
	},

	waitForSignInPasswordBox : function(my) {
		return my.waitForId('signpsswd', 'sign In Password Box');
	},

	waitForMostCitedLink : function(my) {
		return my.waitForXpath('//*[@id="content"]/div[4]/div[2]/div[2]/h3/span/a/span', 'Most Cited Link');
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
		return 70;      
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