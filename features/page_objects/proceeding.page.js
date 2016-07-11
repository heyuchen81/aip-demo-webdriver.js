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
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[4]/div[1]/ul[3]/li[2]/ul/div[5]/ul/li/div[2]/div[1]/h5/span/a' });		
	},
	
	relatedLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="related"]/a/span' });
		
	},
	
	relatedItems : function(my) {
		return my.driver.findElements({ xpath : '//*[@id="morelikethis"]/ul/li' });
	},
		

    // **********************************************************************

	/*
	 *    Actions
	 */

	loadBrowseTitlesTab : function(my) {
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('//*[@id="titlestab"]/a/span')), homePage.waitForTimeout() * 1000, 'The Browse Titles tab was still not present when it should have appeared.');		
	},
	
	checkArticleTabs : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//div[@id=\'articleTabs\']'));	
	}
	
};