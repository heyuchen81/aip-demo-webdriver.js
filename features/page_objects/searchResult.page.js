'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */
		
	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
		
	quickSearchBox : function(my) {
		return my.driver.findElement({ id : 'quickSearchBox' }); 		
	},

	autocompleteLi : function(my, order) {
		var listorder = order + 1;
		return my.driver.findElement({ id : 'ui-id-' + listorder }); 		
	},
	
	facetItem : function(my, category, order) {
		return my.driver.findElement({ xpath : '//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::ul[1]/li[' + order + ']/a' });
	},
	
	facetCancel : function(my, category) {
		return my.driver.findElement({ xpath : '//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::p[1]/a' });
	},

	explanationText : function(my) {
		return my.driver.findElement({ xpath : '//div[@class=\'explanationText \']' });	
	},
	
	seeMoreButton : function(my) {
		return my.driver.findElement({ xpath : '//button[@class=\'btn btn-primary search-see-more\']' });	
	},
	
	searchResultElements : function(my) {
		return my.driver.findElements({ xpath : '//div[@id=\'listItems\']/div/div[@class=\'resultItemContainer \']' });	
	},
	
	sortDesButton : function(my) {
		return my.driver.findElement({ id : 'sortNewest' });
	},
	
	searchResultElementTimeSpan : function(my, order) {
		return my.driver.findElement({ xpath : '//div[@id=\'listItems\']/div/div[@class=\'resultItemContainer \'][' + order + ']/div/div/span[@class=\'source\']/span[@class=\'sourcePublicationDate\']' });			
	},
	
	searchResultElementViewDescription : function(my, order) {
		return my.driver.findElement({ xpath : '//div[@id=\'listItems\']/div/div[@class=\'resultItemContainer \'][' + order + ']/div/div/div/span[@class=\'plus\']/span[@class=\'underline\' and text()=\'View Description\']' });			
	},
	
	searchResultElementDescription : function(my, order) {
		return my.driver.findElement({ xpath : '//div[@id=\'listItems\']/div/div[@class=\'resultItemContainer \'][' + order + ']/div/div/div[@class=\'description\']/div[@class=\'descriptioncontainer\']/p' });			
	},
	
	searchResultRefineInput : function(my) {
		return my.driver.findElement({ id : 'searchRefineBox' });			
	},
	
	physicsTodayTab : function(my) {
		return my.driver.findElement({ id : 'physicstoday' });			
	},
	
	relatedDatabasesTab : function(my) {
		return my.driver.findElement({ id : 'relatedDatabases' });			
	},
	
	modifySearchButton : function(my) {
		return my.driver.findElement({ xpath : '//div[@class=\'resultsbuttonsContainer\']/div/a[@title=\'Modify this search\']' });			
	},                                          
	
	authorLink : function(my, order, name) {
		var thespan = my.driver.findElement({ xpath : '//*[@id="listItems"]/div/div[@class="resultItemContainer "][' + order + ']/div/div/div[@class="authorsWithPopup"]/span[2]' });	
		return thespan.findElement({ linkText : name });
	},

	citationAuthorLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="authorpopup"]/div/div[1]/a' });	
	},
	
	mobileFilterButton : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="searchResultsContainer"]/div[contains(normalize-space(@class), \'resultsnav\')]/div[@class="mobileFilterContainer"]/button' });
	},
	
	mobileFacetCategory : function(my, category) {
		return my.driver.findElement({ xpath : '//*[@id="searchResultsContainer"]/div/div/div[@class="search-facet-mobile-container"]/div[@class="facets"]/h3[contains(text(),\'' + category +':\')]' });
	},
	
	mobileFacetItem : function(my, order) {
		return my.driver.findElement({ xpath : '//*[@id="searchResultsContainer"]/div/div/div[@class="search-facet-mobile-container"]/div[@class="facets"]/ul[contains(normalize-space(@class), \'hiddenFacetList\')]/li[' + order +']' });
		                                        //*[@id="searchResultsContainer"]/div[2]/div/div/div/ul[1]/li[3]/a
	},
	
	mobileFacetCancel : function(my, order) {
		return my.driver.findElement({ xpath : '//*[@id="searchResultsContainer"]/div[contains(normalize-space(@class), \'resultsnav\')]/a[@class="anysearchfacetlink"]/span[contains(normalize-space(@class), \'featured-remove-filter\')]' });
	},
	
	mobileSortDdl : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="sortForm"]/div/span[contains(normalize-space(@class), \'mobileLabel\')]' });
	},
	
	mobileEditButton : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/span[contains(text(),\'Edit or Save\')]' });
	},
		

    // **********************************************************************

	/*
	 *    Actions
	 */

	checkAutocompleteItem : function(my, order) {
		var listorder = order + 1;
		return my.driver.isElementPresent(my.webdriver.By.id('ui-id-' + listorder));	
	},
	
	checkFacetItem : function(my, category, order) {
		var listorder = order + 1;
		return my.driver.isElementPresent(my.webdriver.By.xpath('//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::ul[1]/li[' + order + ']/a'));	
	},
	
	checkFacetCancel : function(my, category) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::p[1]/a'));	
	},
	
	checkSortDesButton : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.id('sortNewest'));	
	},
	
	checkExplanationText : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//div[@class=\'explanationText \']'));	
	},

	loadExplanationText : function(my) {
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('//div[@class=\'explanationText \']')), homePage.waitForTimeout() * 1000, 'The Explanation Text was still not present when it should have appeared.');		
	},
	
	loadMobileFacetCategory : function(my, category) {
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('//*[@id="searchResultsContainer"]/div/div/div[@class="search-facet-mobile-container"]/div[@class="facets"]/h3[contains(text(),\'' + category +':\')]')), homePage.waitForTimeout() * 1000, 'The Explanation Text was still not present when it should have appeared.');		
	},
	
	loadExplanationText_newText : function(my, text) {
		my.driver.wait(my.webdriver.until.elementTextContains(my.driver.findElement(my.webdriver.By.xpath('//div[@class=\'explanationText \']')), text), homePage.waitForTimeout() * 1000, 'The Explanation Text (with new text ' + text + ') was still not present when it should have appeared.');	
	},
	
	vanishExplanationText : function(my) {
		my.driver.wait(function() {
		    return my.driver.isElementPresent(my.webdriver.By.xpath('//div[@class=\'explanationText \']')).then(function(present) {
		        return !present;
		    });
		}, homePage.waitForTimeout() * 1000, 'The Explanation Text was still present when it should have disappeared.');		
	},
	
	showMobileSortDdl : function(my) {
		var currentPage = this;
		var expireMessage = 'Mobile Sort Ddl was still not displayed when it should have appeared.'
		my.driver.wait(function () {
	        return currentPage.mobileSortDdl(my).isDisplayed().then(function (displayed) {
	            if (!displayed) return false;
	            return currentPage.mobileSortDdl(my).isEnabled();
	        });
	    }, homePage.waitForTimeout() * 1000, expireMessage);
	},
	
	showSearchResultRefineInput : function(my) {
		var currentPage = this;
		var expireMessage = 'Search Result Refine Input was still not displayed when it should have appeared.'
		my.driver.wait(function () {
	        return currentPage.searchResultRefineInput(my).isDisplayed().then(function (displayed) {
	            if (!displayed) return false;
	            return currentPage.searchResultRefineInput(my).isEnabled();
	        });
	    }, homePage.waitForTimeout() * 1000, expireMessage);
	},
	
	showMobileFilterButton : function(my) {
		var currentPage = this;
		var expireMessage = 'Mobile Filter Button was still not displayed when it should have appeared.'
		my.driver.wait(function () {
	        return currentPage.mobileFilterButton(my).isDisplayed().then(function (displayed) {
	            if (!displayed) return false;
	            return currentPage.mobileFilterButton(my).isEnabled();
	        });
	    }, homePage.waitForTimeout() * 1000, expireMessage);
	},
	
	showMobileFacetCategory : function(my, category) {
		var currentPage = this;
		var expireMessage = 'Mobile Facet Category \'' + category + '\' was still not displayed when it should have appeared.'
		my.driver.wait(function () {
	        return currentPage.mobileFacetCategory(my, category).isDisplayed().then(function (displayed) {
	            if (!displayed) return false;
	            return currentPage.mobileFacetCategory(my, category).isEnabled();
	        });
	    }, homePage.waitForTimeout() * 1000, expireMessage);
	},
	
	showMobileFacetItem : function(my, order) {
		var currentPage = this;
		var expireMessage = 'Mobile Facet Item was still not displayed when it should have appeared.'
		my.driver.wait(function () {
	        return currentPage.mobileFacetItem(my, order).isDisplayed().then(function (displayed) {
	            if (!displayed) return false;
	            return currentPage.mobileFacetItem(my, order).isEnabled();
	        });
	    }, homePage.waitForTimeout() * 1000, expireMessage);
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
	
	getSearchResultElementTime : function(txt) {
		return parseInt(txt.replace('(', '').replace(')', '').trim());
	},
	
	mobileSortTreat : function(my) {
		var currentPage = this;
		this.mobileSortDdl(my).isDisplayed().then(function(displayed) {
			if (displayed) {
				currentPage.mobileSortDdl(my).click();
				currentPage.showMobileSortDdl(my);
			}
		});
	},
	
	mobileEditTreat : function(my) {
		var currentPage = this;
		my.driver.sleep(1000);
		this.mobileEditButton(my).isDisplayed().then(function(displayed) {
			if (displayed) {
				currentPage.mobileEditButton(my).click();
				currentPage.showSearchResultRefineInput(my);
			}
		});
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