'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */

	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
//	elementById : function(my) {
//		return my.driver.findElement({ id : 'elementId' }); 		
//	},
//	
//	elementByCss : function(my) {
//		return my.driver.findElement({ css : 'elementCss' }); 		
//	},
//	
	dangerousContinueLink : function(my) {
		return my.driver.findElement({ xpath : '//h4[@id=continueToSiteAlign]/a' }); 		
	},
//	
//	facetsItem : function(my, category, order) {
//		return my.driver.findElement({ xpath : '//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::ul[1]/li[' + order + ']/a' });
//	}, // KEEP THE COMMA!!
	
	// div[text() = \'text1\']
	// div[contains(text(),\'text1\')]
	// div[@class = \'class1 class2\']
	// div[contains(normalize-space(@class), \'class2\')]
	// div[contains(normalize-space(@style), \'style2: value2\')]
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get(homePage.baseUrl() + 'template/extention');
	},
	
	checkSecurityHeader : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//h1[@id="mainTitle" and contains(text(), "There is a problem with this websiteâ€™s security certificate.")]'));	
	},	
	
//	waitUntilElementPresent : function(my, expireMessage) {
//		expireMessage = 'Element was still not present when it should have appeared.'
//		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('elementXPath')), homePage.waitForTimeout() * 1000, expireMessage);			
//	},
//	
//	waitUntilElementDisappear  : function(my, expireMessage) {
//		expireMessage = 'Element was still present when it should have disappeared.'
//		my.driver.wait(function() {
//		    return my.driver.isElementPresent(my.webdriver.By.xpath('elementXPath')).then(function(present) {
//		        return !present;
//		    });
//		}, homePage.waitForTimeout() * 1000, expireMessage);		
//	},
//	
//	wailUntilElementContainNewText : function(my, newText, expireMessage) {
//		newText = 'someNewText';
//		expireMessage = 'Element (with new text ' + newText + ') was still not present when it should have appeared.';
//		my.driver.wait(my.webdriver.until.elementTextContains(my.driver.findElement(my.webdriver.By.xpath('elementXPath')), newText), homePage.waitForTimeout() * 1000, expireMessage);	
//	},

	
    // **********************************************************************
	
	/*
	 *    Utilities
	 */
		
	goThroughWarning : function(my) {
		var shared = {};
		var currentPage = this;
		this.pageTitle(my).then(function(txt) {
			console.log(txt);
			console.log(homePage.baseUrl().replace("http://", ""));
			console.log(txt === homePage.baseUrl().replace("http://", ""));
			return true; // txt === homePage.baseUrl().replace("http://", "");
		}).then(function(istitle) {
			shared.title = istitle;
			return currentPage.checkSecurityHeader(my);
		}).then(function(isheader) {
			shared.header = isheader;
		}).then(function() {
			if (shared.title) {
				console.log('I AM IN TITLE!!!!!');
				currentPage.dangerousContinueLink(my).click();
			}
			return my.driver.getPageSource();
		}).then(function(src) {
			if (shared.title) {
				console.log('I AM IN TITLE AGAIN!!!!!');
				console.log(src);
			}
		});
	}
		
		
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