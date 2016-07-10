'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */

	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
	checkoutButton : function(my) {
		return my.driver.findElement({ id : 'showbilling_0' }); 		
	},
	
//	elementById : function(my) {
//		return my.driver.findElement({ id : 'elementId' }); 		
//	},
//	
//	elementByCss : function(my) {
//		return my.driver.findElement({ css : 'elementCss' }); 		
//	},
//	
//	elementByXPath : function(my) {
//		return my.driver.findElement({ xpath : 'elementXPath' }); 		
//	},
//	
//	facetsItem : function(my, category, order) {
//		return my.driver.findElement({ xpath : '//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::ul[1]/li[' + order + ']/a' });
//	}, // KEEP THE COMMA!!
	
	// div[text() = \'text1\']
	// div[contains(text(),\'text1\')]
	// div[@class = \'class1 class2\']
	// div[contains(normalize-space(@class), \'class2\']
	// div[contains(normalize-space(@style), \'style2: value2\']
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get(homePage.baseUrl() + 'cart');
	},
//	
//	checkElementPresent : function(my) {
//		var listorder = order + 1;
//		return my.driver.isElementPresent(my.webdriver.By.xpath('elementXPath'));	
//	},
//	
//	waitUntilElementPresent : function(my, expireTime, expireMessage) {
//		expireTime = 10;
//		expireMessage = 'Element was still not present when it should have appeared.'
//		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('elementXPath')), expireTime * 1000, expireMessage);			
//	},
//	
//	waitUntilElementDisappear  : function(my, expireTime, expireMessage) {
//		expireTime = 10;
//		expireMessage = 'Element was still present when it should have disappeared.'
//		my.driver.wait(function() {
//		    return my.driver.isElementPresent(my.webdriver.By.xpath('elementXPath')).then(function(present) {
//		        return !present;
//		    });
//		}, expireTime * 1000, expireMessage);		
//	},
//	
//	wailUntilElementContainNewText : function(my, newText, expireTime, expireMessage) {
//		newText = 'someNewText';
//		expireTime = 10;
//		expireMessage = 'Element (with new text ' + newText + ') was still not present when it should have appeared.';
//		my.driver.wait(my.webdriver.until.elementTextContains(my.driver.findElement(my.webdriver.By.xpath('elementXPath')), newText), expireTime * 1000, expireMessage);	
//	}

	
    // **********************************************************************
	
	/*
	 *    Utilities
	 */
	
//	getProcessedText : function(txt) {
//		return 'Processed Text ' + txt;
//	},
//	
//	getProcessedNumber : function(num) {
//		return num + 10;
//	},
//	
//	getProcessedArray : function(arr) {
//	    var newArr = new Array(arr.length);
//	    var i = 0;
//	    for (i = 0; i < arr.length; i++) {
//	    	newArr[i] = 'new ' + arr[i];
//	    }	    
//	    return newArr;
//	},
	
	

	
};