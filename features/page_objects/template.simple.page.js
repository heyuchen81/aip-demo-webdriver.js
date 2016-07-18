'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */

	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
	elementById : function(my) {
		return my.driver.findElement({ id : 'elementId' }); 		
	},
	
	elementByCss : function(my) {
		return my.driver.findElement({ css : 'elementCss' }); 		
	},
	
	elementByXpath : function(my) {
		return my.driver.findElement({ xpath : 'elementXpath' }); 		
	},
	
	
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get(homePage.baseUrl() + 'template/extention');
	},
	
	waitForElementById : function(my) {
		return my.waitForId('elementId', 'Element By Id (Element Name)');
	},
	
	waitForElementByCss : function(my) {
		return my.waitForCss('elementCss', 'Element By Css (Element Name)');
	},
	
	waitForElementByXpath : function(my) {
		return my.waitForXpath('elementXpath', 'Element By Xpath (Element Name)');
	}

};