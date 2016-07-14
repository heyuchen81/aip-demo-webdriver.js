'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */
	buyButton : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[5]/div/div/div[3]/div/div[2]/div/form/button/span' }); 		
	},		
	
	breadCrumb : function(my) {
		return my.driver.findElement({ id : 'breadcrumb' }); 		
	},
	
	abstractTab : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="abstract"]/a/span' }); 		
	},
	

    // **********************************************************************

	/*
	 *    Actions
	 */

	loadCertainArticle : function(my) {
	    my.driver.get(homePage.baseUrl() + 'content/lia/journal/jla/28/1/10.2351/1.4931930');
	},
	
	checkAddToFavorites : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//*[@id="loginWrapper"]/ul/li[@class="item-favourites"]/div/a'));	
	}
};