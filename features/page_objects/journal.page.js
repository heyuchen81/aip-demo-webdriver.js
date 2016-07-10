'use strict';

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
	
	
	//*[@id="content"]/div[5]/div[2]/div[4]/div/div/div/ul[1]/li[2]/ul/div/ul/li/div[2]/div[1]/h5/span/a

	
    // **********************************************************************

	/*
	 *    Actions
	 */	
	
	checkSignInAlert : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//div[@class=\'signInOrRegisterWrapper\']/div[contains(normalize-space(@style), \'display: block\')]'));	
	}
	
};