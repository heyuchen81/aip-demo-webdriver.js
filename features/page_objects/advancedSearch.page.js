'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */
		
	pageTitle : function(my) {
		return my.driver.getTitle();          
	},

	inputBox1 : function(my) {
		return my.driver.findElement({ id : 'value1' }); 		
	},
	
	inputBox2 : function(my) {
		return my.driver.findElement({ id : 'value2' }); 		
	},
	
	searchButton : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="advanced-search-form"]/div/a/span[text()=\'Search\']' }); 		
	},                                                               

	searchWithinTopicsButton : function(my) {
		return my.driver.findElement({ xpath : '//div[contains(normalize-space(@class), \'searchWithinContainerInner\')]/div[contains(normalize-space(@class), \'sw_topics\')]' });
	},
	
	searchWithinTopicsItemByOrder : function(my, order) {
		return my.driver.findElement({ xpath : '//div[@id=\'sWDlgHook\']/div/ul[@class=\'sWDlgList\']/li[' + order + ']/input' }); 		
	},
	
	searchWithinTopicsItemByText : function(my, txt) {
		return my.driver.findElement({ xpath : '//div[@id=\'sWDlgHook\']/div/ul/li[contains(text(),\'' + txt + '\')]/input' }); 		
	},
	
	submitCloseButton : function(my) {
		return my.driver.findElement({ xpath : '//div[@id=\'sWDlgHook\']/div/div/span[@class=\'sWDlgSubmit\']/button' }); 		
	},
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */
	
	load : function(my) {
		my.driver.get(homePage.baseUrl() + 'search/advancedsearch');
	},
	
	loadSearchWithinTopicsItemClickable : function(my, order) {
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('//div[@id=\'sWDlgHook\']/div/ul[@class=\'sWDlgList\']/li[' + order + '][@class=\'\']/input')), 10000, 'The clickable Topics item was still not present when it should have appeared.');			
	}
	
};