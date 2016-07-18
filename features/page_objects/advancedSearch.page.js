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
		
	waitForInputBox1 : function(my) {
		return my.waitForId('value1', 'Input Box 1');
	},
	
	waitForInputBox2 : function(my) {
		return my.waitForId('value2', 'Input Box 2');
	},
	
	waitForSearchButton : function(my) {
		return my.waitForXpath('//*[@id="advanced-search-form"]/div/a/span[text()=\'Search\']', 'Search Button');
	},
	
	waitForSearchWithinTopicsButton : function(my) {
		return my.waitForXpath('//div[contains(normalize-space(@class), \'searchWithinContainerInner\')]/div[contains(normalize-space(@class), \'sw_topics\')]', 'Search Within Topics Button');
	},
	
	waitForSearchWithinTopicsItemByOrder : function(my, order) {
		return my.waitForXpath('//div[@id=\'sWDlgHook\']/div/ul[@class=\'sWDlgList\']/li[' + order + ']/input', 'Search Within Topics Item By Order');
	},
	
	waitForSearchWithinTopicsItemByText : function(my, txt) {
		return my.waitForXpath('//div[@id=\'sWDlgHook\']/div/ul/li[contains(text(),\'' + txt + '\')]/input', 'Search Within Topics Item By Text');
	},
	
	waitForSubmitCloseButton : function(my) {
		return my.waitForXpath('//div[@id=\'sWDlgHook\']/div/div/span[@class=\'sWDlgSubmit\']/button', 'Submit Close Button');
	}
	
};