'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */
		
	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
	mostReadRssIcon : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="journaloverviewtabid"]/div[3]/div[2]/div[1]/h3/span/a/span' }); 
	},
	
	mostReadRssIcon : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="journaloverviewtabid"]/div[3]/div[2]/div[1]/h3/span/a/span' }); 
	},
	
	browseLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="issuestab"]/a/span' }); 
	},
	
	subscribeToEmailLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="loginWrapper"]/ul[2]/li[3]/a/span' });
	},

	signInAlertClose : function(my) {
		return my.driver.findElement({ xpath : '//div[@class=\'signInOrRegisterWrapper\']/div[contains(normalize-space(@style), \'display: block\')]/div[1]/a' });		
	},
	
	contributedArticleTitle : function(my, order) {
		return my.driver.findElement({ xpath : '//div[@class="articleInToc"]/ul/li[' + order + ']/div/div/h5/span/a' });		
	},
	
	mobileEditButton : function(my, order) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[4]/span[contains(normalize-space(@class), \'ham-icon\')]/span[@class="aip-icon-menu3"]' });		
	},
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */	
	
	checkSignInAlert : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//div[@class=\'signInOrRegisterWrapper\']/div[contains(normalize-space(@style), \'display: block\')]'));	
	},
	
	showBrowseLink : function(my) {
		var currentPage = this;
		var expireMessage = 'Browse Link was still not displayed when it should have appeared.'
		my.driver.wait(function () {
	        return currentPage.browseLink(my).isDisplayed().then(function (displayed) {
	            if (!displayed) return false;
	            return currentPage.browseLink(my).isEnabled();
	        });
	    }, homePage.waitForTimeout() * 1000, expireMessage);
	},

	
    // **********************************************************************
	
	/*
	 *    Utilities
	 */
	
	mobileEditTreat : function(my) {
		var currentPage = this;
		this.mobileEditButton(my).isDisplayed().then(function(displayed) {
			if (displayed) {
				currentPage.mobileEditButton(my).click();
				currentPage.showBrowseLink(my);
			}
		});
	}
};