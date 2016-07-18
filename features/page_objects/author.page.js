'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */
	
	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
		
	nameHeader : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[2]/h1' });	
	},
	
	explanationText : function(my) {
		return my.driver.findElement({ xpath : '//div[@class=\'explanationText \']' });	
	},
	
	facetItem : function(my, category, order) {
		return my.driver.findElement({ xpath : '//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::ul[1]/li[' + order + ']/a' });
	},
	
	facetItems : function(my, category) {
		return my.driver.findElements({ xpath : '//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::ul[1]/li' });
	}, 
	
	facetBackLink : function(my, category) {
		return my.driver.findElement({ xpath : '//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::p[1]/a' });
	},
	
	newestFirstLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="sortForm"]/div/span[contains(normalize-space(@class), \'sort-by-list\')]/span[text()=\'Newest first\']' });
	}, 

	authorArticleElements : function(my) {
		return my.driver.findElements({ xpath : '//div[@id=\'searchResultsContainer\']/div/div[@class=\'resultItemContainer \']' });					
	},
		
	authorArticleElementTimeSpan : function(my, order) {
		return my.driver.findElement({ xpath : '//div[@id=\'searchResultsContainer\']/div/div[@class=\'resultItemContainer \'][' + order + ']/div/div/span[@class=\'source\']/span[@class=\'sourcePublicationDate\']' });			
	},
	
	toggleAllDescriptions : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="searchShowHide"]/span' });			
	},
	
	authorArticleElementDescription : function(my, order) {
		return my.driver.findElement({ xpath : '//div[@id=\'searchResultsContainer\']/div/div[@class=\'resultItemContainer \'][' + order + ']/div/div/div[@class=\'description\']' });			
	},
	
	currentPageSpan : function(my) {
		return my.driver.findElement({ xpath : '//div[@class="navigationBar"]/div/div[@class="paginator"]/span' });	
	},  
	
	nextButton : function(my) {
		var elem = my.driver.findElement({ xpath : '//div[@class="navigationBar"]/div/div[@class="paginator"]' }); 
		return elem.findElement({ linkText : 'NEXT >' });
	},
	
	
	// **********************************************************************

	/*
	 *    Actions
	 */

	waitForNameHeader : function(my) {
		return my.waitForXpath('//*[@id="content"]/div[2]/h1', 'Name Header');
	},
	
	waitForExplanationText : function(my) {
		return my.waitForXpath('//div[@class=\'explanationText \']', 'Explanation Text');
	},

	waitForFacetItem : function(my, category, order) {
		return my.waitForXpath('//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::ul[1]/li[' + order + ']/a', 'Facet Item');
	},

	waitForFacetItems : function(my, category) {
		return my.waitForXpath('//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::ul[1]/li', 'Facet Items');
	},

	waitForFacetBackLink : function(my, category) {
		return my.waitForXpath('//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::p[1]/a', 'Facet Back Link');
	},

	waitForNewestFirstLink : function(my) {
		return my.waitForXpath('//*[@id="sortForm"]/div/span[contains(normalize-space(@class), \'sort-by-list\')]/span[text()=\'Newest first\']', 'Newest First Link');
	},                         

	waitForAuthorArticleElements : function(my) {
		return my.waitForXpath('//div[@id=\'searchResultsContainer\']/div/div[@class=\'resultItemContainer \']', 'Author Article Elements');
	},

	waitForAuthorArticleElementTimeSpan : function(my, order) {
		return my.waitForXpath('//div[@id=\'searchResultsContainer\']/div/div[@class=\'resultItemContainer \'][' + order + ']/div/div/span[@class=\'source\']/span[@class=\'sourcePublicationDate\']', 'Author Article Element Time Span');
	},

	waitForToggleAllDescriptions : function(my) {
		return my.waitForXpath('//*[@id="searchShowHide"]/span', 'Toggle All Descriptions');
	},

	waitForAuthorArticleElementDescription : function(my, order) {
		return my.waitForXpath('//div[@id=\'searchResultsContainer\']/div/div[@class=\'resultItemContainer \'][' + order + ']/div/div/div[@class=\'description\']', 'Author Article Element Description');
	},

	waitForCurrentPageSpan : function(my) {
		return my.waitForXpath('//div[@class="navigationBar"]/div/div[@class="paginator"]/span', 'Current Page Span');
	},

	waitForNextButton : function(my) {
		return my.waitForXpath('//div[@class="navigationBar"]/div/div[@class="paginator"]', 'Next Button');
	},
	
	loadFacetBackLink : function(my, category) {
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::p[1]/a')), homePage.waitForTimeout() * 1000, 'Facet Back Link (in ' + category + ') was still not present when it should have appeared.');		
	},
	
	vanishFacetBackLink : function(my, category) {
		my.driver.wait(function() {
		    return my.driver.isElementPresent(my.webdriver.By.xpath('//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::p[1]/a')).then(function(present) {
		        return !present;
		    });
		}, homePage.waitForTimeout() * 1000, 'The Facet Back Link was still present when it should have disappeared.');		
	},

	checkCurrentPageSpan : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//*[@id="searchResultsContainer"]/div[4]/div[21]/div/div[2]/span')); 
	}, 
	
	
	// **********************************************************************
	
	/*
	 *    Utilities
	 */
	
	getExplanationTextTotalNumber : function(txt) {
		return parseInt(txt.substring(0, txt.indexOf(' results')).replace(',', '').split(" ").pop());
	},
	
	getFacetItemNumber : function(txt) {
	    var refnum = txt.trim().replace(',', '').split(' ').pop();
	    return parseInt(refnum.slice(1, refnum.length - 1));
	},
	
	getAuthorArticleElementTime : function(txt) {
		return parseInt(txt.replace('(', '').replace(')', '').trim());
	},
	
	cloneArray : function(arr) {
		var newarr = new Array(arr.length);
		var i;
		for (i = 0; i < arr.length; i++) {
			newarr[i] = arr[i];
		}
		return newarr;
	},
	
	compareArray : function(arr1, arr2) {
		var str1 = arr1.slice().join(',');
		var str2 = arr2.slice().join(',');
		return str1 === str2;
	}	
	
};