'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */
		
	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
	browseTitlesTab : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="titlestab"]/a/span' });			
	},
	
	proceedingLink : function(my, order) {
		return my.driver.findElement({ xpath : '//*[@id="titlestab"]/div[2]/div[2]/ul[contains(normalize-space(@class), \'separated-list\')]/li[' + order + ']/ul/li/div/div[1]/h5/span/a' });
	},
	
	articleLink : function(my, order) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[4]/div[1]/ul[3]/li[2]/ul/div/ul/li/div[2]/div[1]/h5/span/a' });	
	},
	
	relatedLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="related"]/a/span' });		
	},
	
	relatedItems : function(my) {
		return my.driver.findElements({ xpath : '//*[@id="morelikethis"]/ul/li' });
	},
	
	mobileMenuButton : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[3]/div/span[contains(normalize-space(@class), \'ham-icon\')]/span[@class = \'aip-icon-menu3\']' });			
	},
	
	mobileArticleMenuButton : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="articleTabs"]/div/span' });			
	},	
		
		
    // **********************************************************************

	/*
	 *    Actions
	 */
	
	waitForBrowseTitlesTab : function(my) {
		return my.waitForXpath('//*[@id="titlestab"]/a/span', 'Browse Titles Tab');
	},

	waitForProceedingLink : function(my, order) {
		return my.waitForXpath('//*[@id="titlestab"]/div[2]/div[2]/ul[contains(normalize-space(@class), \'separated-list\')]/li[' + order + ']/ul/li/div/div[1]/h5/span/a', 'Proceeding Link');
	},

	waitForArticleLink : function(my) {
		return my.waitForXpath('//*[@id="content"]/div[4]/div[1]/ul[3]/li[2]/ul/div/ul/li/div[2]/div[1]/h5/span/a', 'Article Link');
	},

	waitForRelatedLink : function(my) {
		return my.waitForXpath('//*[@id="related"]/a/span', 'Related Link');
	},

	waitForRelatedItems : function(my) {
		return my.waitForXpath('//*[@id="morelikethis"]/ul/li', 'Related Items');
	},

	waitForMobileMenuButton : function(my) {
		return my.waitForXpath('//*[@id="content"]/div[3]/div/span[contains(normalize-space(@class), \'ham-icon\')]/span[@class = \'aip-icon-menu3\']', 'Mobile Menu Button');
	},

	waitForMobileArticleMenuButton : function(my) {
		return my.waitForXpath('//*[@id="articleTabs"]/div/span', 'Mobile Article Menu Button');
	},

	checkArticleTabs : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//div[@id=\'articleTabs\']'));	
	},
	
	showBrowseTitlesTab : function(my) {
		var currentPage = this;
		var expireMessage = 'Browse Titles Tab was still not displayed when it should have appeared.'
		my.driver.wait(function () {
	        return currentPage.browseTitlesTab(my).isDisplayed().then(function (displayed) {
	            if (!displayed) return false;
	            return currentPage.browseTitlesTab(my).isEnabled();
	        });
		 }, homePage.waitForTimeout() * 1000, expireMessage);
	},
		
	showRelatedLink : function(my) {
		var currentPage = this;
		var expireMessage = 'Related Link was still not displayed when it should have appeared.'
		my.driver.wait(function () {
	        return currentPage.relatedLink(my).isDisplayed().then(function (displayed) {
	            if (!displayed) return false;
	            return currentPage.relatedLink(my).isEnabled();
	        });
		 }, homePage.waitForTimeout() * 1000, expireMessage);
	},
	
	
    // **********************************************************************

	/*
	 *    Utilities
	 */
	
	mobileEditTreat : function(my) {
		var currentPage = this;
		this.mobileMenuButton(my).isDisplayed().then(function(displayed) {
			if (displayed) {
				currentPage.mobileMenuButton(my).click();
				currentPage.showBrowseTitlesTab(my);
			}
		});
	},
	
	mobileArticleMenuTreat : function(my) {
		var currentPage = this;
		my.driver.sleep(1000);
		this.mobileArticleMenuButton(my).isDisplayed().then(function(displayed) {
			if (displayed) {
				currentPage.mobileArticleMenuButton(my).click();
				currentPage.showRelatedLink(my);
			}
		});
	},
	
};