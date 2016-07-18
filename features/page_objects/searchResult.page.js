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
	},
	
	mobileFacetCancel : function(my) {
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

	waitForQuickSearchBox : function(my) {
		return my.waitForId('quickSearchBox', 'Quick Search Box');
	},
	
	waitForAutocompleteLi : function(my, order) {
		var listorder = order + 1;
		return my.waitForId('ui-id-' + listorder, 'Autocomplete Li');
	},
	
	waitForFacetItem : function(my, category, order) {
		return my.waitForXpath('//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::ul[1]/li[' + order + ']/a', 'Facet Item');
	},

	waitForFacetCancel : function(my, category) {
		return my.waitForXpath('//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::p[1]/a', 'Facet Cancel');
	},

	waitForExplanationText : function(my) {
		return my.waitForXpath('//div[@class=\'explanationText \']', 'Explanation Text');
	},

	waitForSeeMoreButton : function(my) {
		return my.waitForXpath('//button[@class=\'btn btn-primary search-see-more\']', 'See More Button');
	},

	waitForSortDesButton : function(my) {
		return my.waitForId('sortNewest', 'Sort Des Button');
	},
	
	waitForSearchResultElementTimeSpan : function(my, order) {
		return my.waitForXpath('//div[@id=\'listItems\']/div/div[@class=\'resultItemContainer \'][' + order + ']/div/div/span[@class=\'source\']/span[@class=\'sourcePublicationDate\']', 'Search Result Element Time Span');
	},

	waitForSearchResultElementViewDescription : function(my, order) {
		return my.waitForXpath('//div[@id=\'listItems\']/div/div[@class=\'resultItemContainer \'][' + order + ']/div/div/div/span[@class=\'plus\']/span[@class=\'underline\' and text()=\'View Description\']', 'Search Result Element View Description');
	},

	waitForSearchResultElementDescription : function(my, order) {
		return my.waitForXpath('//div[@id=\'listItems\']/div/div[@class=\'resultItemContainer \'][' + order + ']/div/div/div[@class=\'description\']/div[@class=\'descriptioncontainer\']/p', 'Search Result Element Description');
	},
	
	waitForSearchResultRefineInput : function(my) {
		return my.waitForId('searchRefineBox', 'Search Result Refine Input');
	},
	
	waitForPhysicsTodayTab : function(my) {
		return my.waitForId('physicstoday', 'Physics Today Tab');
	},
	
	waitForRelatedDatabasesTab : function(my) {
		return my.waitForId('relatedDatabases', 'Related Databases Tab');
	},
	
	waitForCitationAuthorLink : function(my) {
		return my.waitForXpath('//*[@id="authorpopup"]/div/div[1]/a', 'Citation Author Link');
	},

	waitForModifySearchButton : function(my) {
		return my.waitForXpath('//div[@class=\'resultsbuttonsContainer\']/div/a[@title=\'Modify this search\']', 'Modify Search Button');
	},

	waitForMobileFilterButton : function(my) {
		return my.waitForXpath('//*[@id="searchResultsContainer"]/div[contains(normalize-space(@class), \'resultsnav\')]/div[@class="mobileFilterContainer"]/button', 'Mobile Filter Button');
	},

	waitForMobileFacetCategory : function(my, category) {
		return my.waitForXpath('//*[@id="searchResultsContainer"]/div/div/div[@class="search-facet-mobile-container"]/div[@class="facets"]/h3[contains(text(),\'' + category +':\')]', 'Mobile Facet Category');
	},

	waitForMobileFacetItem : function(my, order) {
		return my.waitForXpath('//*[@id="searchResultsContainer"]/div/div/div[@class="search-facet-mobile-container"]/div[@class="facets"]/ul[contains(normalize-space(@class), \'hiddenFacetList\')]/li[' + order +']', 'Mobile Facet Item');
	},
	
	waitForMobileFacetCancel : function(my) {
		return my.waitForXpath('//*[@id="searchResultsContainer"]/div[contains(normalize-space(@class), \'resultsnav\')]/a[@class="anysearchfacetlink"]/span[contains(normalize-space(@class), \'featured-remove-filter\')]', 'Mobile Facet Cancel');
	},

	waitForMobileSortDdl : function(my) {
		return my.waitForXpath('//*[@id="sortForm"]/div/span[contains(normalize-space(@class), \'mobileLabel\')]', 'Mobile Sort Ddl');
	},

	waitForMobileEditButton : function(my) {
		return my.waitForXpath('//*[@id="content"]/span[contains(text(),\'Edit or Save\')]', 'Mobile Edit Button');
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