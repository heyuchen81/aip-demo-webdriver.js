'use strict';

var homePage = require('../page_objects/home.page.js');

module.exports = {
		
	/* 
	 *    Web Elements
	 */
		
	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
	topicGoTo : function(my, topic) {	
		return my.driver.findElement({ xpath : '//*[@id="topicsTopLevel"]/li/span/span[@class="link2topic"]/a[@title="Go to ' + topic + ' topic page"]' }); 			
	},

	topicTitle : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[2]/h1' })
	},
	
	searchRefineBox : function(my) {
		return my.driver.findElement({ id : 'searchRefineBox' }); 
	},
	
	explanationText : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[5]/div' }); 
												
	}, 

	topicSearchBack : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[6]/div[3]/a' }); 
	},	
	
	nextButton : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="searchResultsContainer"]/div[3]/div[21]/div/div[2]/a[6]' }); 
	},	
	
	currentPageSpan : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="searchResultsContainer"]/div[3]/div[21]/div/div[2]/span' });		                                        
	},                                          
	
	facetItem : function(my, category, order) {
		return my.driver.findElement({ xpath : '//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::ul[1]/li[' + order + ']/a' });
	},
	
	physicsTodayTab : function(my) {
		return my.driver.findElement({ id : 'physicstodaycontent' });	
	},
	
	authorsTab : function(my) {
		return my.driver.findElement({ id : 'authorsforconceptcontent' });	
	},
	
	authorItems : function(my) {
		return my.driver.findElements({ xpath : '//*[@id="searchResultsContainer"]/div[4]/div[@class="resultItemContainer "]' });	
	},
	
	moreSpecificItem : function(my, text) {
		return my.driver.findElement({ xpath : '//*[@id="narrowconcept"]/li[@class="visibleCount"]/a[@title=\'Link to ' + text + '\']' });	
	},
	
	topicHeader : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[2]/h1' });	
	},

	mobileSpecificTopics : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="content"]/div[@class="conceptsheader"]/div[contains(normalize-space(@class), \'conceptspartcontainer\')]/div[contains(normalize-space(@class), \'morespecificconcepts\')]/h3' });
	},
	
	mobileFilterButton : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="searchResultsContainer"]/div/div[@class="resultsnav"]/div[@class="mobileFilterContainer"]/div/div/button' });
	},
	
	mobileBackLink : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="facetFilter"]/div[1]/button/span[2]' });
	},	
		
		
    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
	    my.driver.get(homePage.baseUrl() + 'content/topics');
	},
	
	loadTopic : function(my, topic) {		
		var ext = 'content/topic/' + topic.trim().replace(' ', '-').toLowerCase();
	    my.driver.get(homePage.baseUrl() + ext);
	},
	
	loadExplanationText : function(my) {                                        
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('//*[@id="content"]/div[@class="searchExplanation"]/div')), homePage.waitForTimeout() * 1000, 'The Explanation Text was still not present when it should have appeared.');		
	},
	
	loadExplanationText_newText : function(my, text) {
		my.driver.wait(my.webdriver.until.elementTextContains(my.driver.findElement(my.webdriver.By.xpath('//*[@id="content"]/div[@class="searchExplanation"]/div')), text), homePage.waitForTimeout() * 1000, 'The Explanation Text (with new text ' + text + ') was still not present when it should have appeared.');	
	},
	
	loadCurrentPageSpan : function(my) {                                        
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('//*[@id="searchResultsContainer"]/div[3]/div[21]/div/div[2]/span')), homePage.waitForTimeout() * 1000, 'The Current Page Span was still not present when it should have appeared.');		
	},
	
	checkCurrentPageSpan : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//*[@id="searchResultsContainer"]/div[3]/div[21]/div/div[2]/span')); 
	},  
	
	loadCurrentPageSpan_newText : function(my, newText) {
		var expireMessage = 'Current Page Span (with new text ' + newText + ') was still not present when it should have appeared.';
		my.driver.wait(my.webdriver.until.elementTextContains(my.driver.findElement(my.webdriver.By.xpath('//*[@id="searchResultsContainer"]/div[3]/div[21]/div/div[2]/span')), newText), homePage.waitForTimeout() * 1000, expireMessage);	
	},
	
	vanishCurrentPageSpan  : function(my) {
		var expireMessage = 'Current Page Span was still present when it should have disappeared.'
		my.driver.wait(function() {
		    return my.driver.isElementPresent(my.webdriver.By.xpath('//*[@id="searchResultsContainer"]/div[3]/div[21]/div/div[2]/span')).then(function(present) {
		        return !present;
		    });
		}, homePage.waitForTimeout() * 1000, expireMessage);		
	},
	
	checkFacetItem : function(my, category, order) {
		var listorder = order + 1;
		return my.driver.isElementPresent(my.webdriver.By.xpath('//div[@class=\'facets\']/h3[contains(text(),\'' + category + ':\')]/following-sibling::ul[1]/li[' + order + ']/a'));	
	},
	
	loadExplanationText : function(my) {
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('//div[@class=\'explanationText \']')), homePage.waitForTimeout() * 1000, 'The Explanation Text was still not present when it should have appeared.');		
	},
	
	checkTopicBackLink : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//*[@id="facetFilter"]/div[2]/div[@class="facets"]/p[1]/a'));	
	},
	
	checkMobileBackLink : function(my) {
		return my.driver.isElementPresent(my.webdriver.By.xpath('//*[@id="facetFilter"]/div[1]/button/span[2]'));	
	},	
	
	loadAuthorsTabActive : function(my) {										
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('//*[@id="authorsforconceptcontent" and @class="active"]')), homePage.waitForTimeout() * 1000, 'AuthorsTab was still not active when it should have appeared.');		
	},																			
	
	loadAuthor : function(my, order) {										    
		my.driver.wait(my.webdriver.until.elementLocated(my.webdriver.By.xpath('//*[@id="searchResultsContainer"]/div[contains(normalize-space(@class), \'searchResultsContainerInner\')]/div[@class="resultItemContainer "][' + order + ']')), homePage.waitForTimeout() * 1000, 'Author ' + order +' was still not active when it should have appeared.');		
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
	
	mobileSpecificTopicsTreat : function(my) {
		var currentPage = this;
		my.driver.sleep(1000);
		this.mobileSpecificTopics(my).isDisplayed().then(function(displayed) {
			if (displayed) {
				currentPage.mobileSpecificTopics(my).click();
			}
		});
	}
};