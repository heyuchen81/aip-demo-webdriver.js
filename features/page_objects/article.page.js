'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */

	breadCrumb : function(my) {
		return my.driver.findElement({ id : 'breadcrumb' }); 		
	},
	
	abstractTab : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="abstract"]/a/span' }); 		
	},
	
	// REAL-TIME EXPERIMENTS
	buyButton : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[5]/div/div/div[3]/div/div[2]/div/form/button/span' }); 		
	},
	
	shoppingCartButton : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[5]/div/div/div[3]/div/div[1]/a' });
	},
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	loadCertainArticle : function(my) {
	    my.driver.get(homePage.baseUrl() + 'content/avs/journal/bip/10/4/10.1116/1.4933243');
	},
	
	waitBreadCrumb : function(my) {
		return my.waitForId('breadcrumb', 'Bread Crumb');
	},
	
	waitForAbstractTab : function(my) {
		return my.waitForXpath('//*[@id="abstract"]/a/span', 'Abstract Tab');
	},
	
	waitForBuyButton : function(my) {
		return my.waitForXpath('//*[@id="content"]/div[5]/div/div/div[3]/div/div[2]/div/form/button/span', 'Buy Button');
	},
	
	waitForShoppingCartButton : function(my) {
		return my.waitForXpath('//*[@id="content"]/div[5]/div/div/div[3]/div/div[1]/a', 'Shopping Cart Button');
	},	
	
	checkAddToFavorites : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//*[@id="loginWrapper"]/ul/li[@class="item-favourites"]/div/a'));	
	}
	
};