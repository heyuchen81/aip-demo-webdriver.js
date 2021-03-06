Feature: Open Access Test
  As a guest user
  I want to review the basic site functionality without logging in 
  In order to pick up any regressions that may have occured in these areas

Background:
  Given user has accessed the Scitation homepage

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Homepage RSS Feeds
  When user has clicked on the most cited rss icon
  Then the rss feed will be displayed

@chrome @chrome_m @firefox @bs_pc1 @bs_m1
Scenario: Quick Search Suggestions
  Given user has entered a three letter string into quick search
  When user selects one of the options
  Then search results page is displayed

@chrome @firefox @bs_pc1
Scenario: Quick Search Filters
  Given user is on search results page after searching for "climate changes in china" 
  When user filters results by topic
  And user removes the filter
  Then full search results will be displayed
  
@chrome_m @bs_m1 
Scenario: Quick Search Filters (mobile) 
  Given user is on search results page after searching for "climate changes in china" 
  When user filters results by topic (mobile)
  And user removes the filter (mobile)
  Then full search results will be displayed (mobile)

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Quick Search More Button
  Given user is on search results page after searching for "search engines" 
  When user clicks the More button at the bottom
  Then 20 more results will be displayed

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Quick Search Sort
  Given user is on search results page after searching for "ingenta" 
  When user sorts by Newest First
  Then the results will be sorted by date

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Quick Search Descriptions
  Given user is on search results page after searching for "vacuum technology video instruction"
  When clicks view description for the first article
  Then the description will be displayed

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Quick Search Refine
  Given user is on search results page after searching for "technology"
  When user refines their search with "computer"
  Then refined search results will be displayed

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Quick Search Physics Today Tab
  Given user is on search results page after searching for "modern history"
  When user reviews the Physics Today tab
  Then results are displayed for physics today

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Quick Search Related Databases tab
  Given user is on search results page after searching for "modern history"
  When user reviews the Related Databases tab
  Then results are displayed for related databases

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 @bs_m1 
Scenario: Advanced Search Submit
  Given user is on advanced search page
  When user enters keywords "technology" into the first field
  And user enters stop words "what" in the second field
  When user clicks on the Search button
  Then search results page is returned

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Advanced Search Modify Search
  Given user is on search results page after searching for "factory automation"
  When user clicks on Modify Search
  Then user is taken to advanced search page
  And search terms "factory automation" are entered into the fields

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Advanced Search Search Within
  Given user is on advanced search page
  When user enters keywords "computer technology" into the first field
  And user clicks the Search Within Topics button
  And user clicks the All Topics checkbox
  And user selects some items
  And user clicks Submit & Close
  And user clicks on the Search button
  Then search results are displayed only for these topics

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Conference Proceedings Browse
  When user has clicked on the Publications link
  And user has selected "AIP Conference Proceedings"
  And user has selected Browse Titles
  And user has clicked on a Conference Proceeding link
  And user has selected a Conference Paper
  Then the conference paper will be displayed
  And there will be a list of related content on the Related tab

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Topic Page
  Given user is on topics page
  When user clicks on go to topic link beside topic "Energy"
  Then "Energy" topic page will be displayed

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Topic Page Refine
  Given user is on topic page "Mathematical physics"
  When user submits a refine search with "gas"
  Then results are filtered by "gas"
  When user clicks return to topic page results
  Then full topic results will be displayed

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Topic Page Pagination
  Given user is on topic page "Mathematical physics"
  When user clicks the next button at the bottom of the page
  Then the next page of results will be displayed

@chrome @firefox @bs_pc1 @debug_pc @chrome_debug
Scenario: Topic Page Facets
  Given user is on topic page "Mathematical physics"
  When user clicks a topic in the topic facet
  Then results are filtered by topic
  When user clicks the Physics Today tab
  Then results will also be filtered by topic
  
@chrome_m @bs_m1 
Scenario: Topic Page Facets (mobile)
  Given user is on topic page "Mathematical physics"
  When user clicks a topic in the topic facet (mobile)
  Then results are filtered by topic (mobile)
  When user clicks the Physics Today tab
  Then results will also be filtered by topic 

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Topic Page Authors Tab
  Given user is on topic page "Mathematical physics"
  When user selects the authors tab
  Then authors will be displayed that are linked to the topic results

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Topic Page More Specific Topic
  Given user is on topic page "Mathematical physics"
  When user selects a more specific topic "Number theory"
  Then the new "Number theory" page will display 

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Navigate To Author Page
  When user has entered performed a quick search for an author "R. L. Kustom"
  And user selects the author name "R. L. Kustom"
  And user selects the from scitation link in the pop-up
  Then the "R. L. Kustom" author page is displayed

# Error in Live
@chrome_error
Scenario: Author Page Facets
  Given user is on "Eugenia Etkina" author page
  When user selects a publisher facet
  Then results are filtered by publisher
  When user selects any publisher link
  Then results are no longer filtered by this publisher

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 @chrome_m_debug
Scenario: Author Page Sort
  Given user is on "Eugenia Etkina" author page
  When user selects newest first link
  Then results are sorted by date

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 @chrome_debug 
Scenario: Author Page View All Descriptions
  Given user is on "Eugenia Etkina" author page
  When user selects view all descriptions link
  Then all descriptions on the page expand

# Error in Live
@chrome_error
Scenario: Author Page Pagination
  Given user is on "Eugenia Etkina" author page
  When user clicks the next button at the bottom of the author page
  Then the next page of results will be displayed in author page
  
@chrome @chrome_m @firefox @bs_pc1 @bs_m1 @chrome_debug 
Scenario: Successful Registration
  Given user is on the registration page
  When user has completed all fields
  And user has waited for 5 seconds
  And user clicks on the registration button
  Then user will be taken to the registration success page

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Unsuccessful Registration
  Given user is on the registration page
  And user has completed all fields
  When user clicks on the registration button
  Then user will be taken to the not authorized page

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Journal Most Read RSS Feeds
  Given user is on "American Journal of Physics" journal page
  When user clicks on the most read rss icon
  Then the rss feed will open

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Journal Email alerts
  Given user is on "Biomicrofluidics" journal browse tab
  When user clicks on the subscribe to email alerts link
  Then the content alerts link will be displayed

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Journal Article
  Given user is on "Biomicrofluidics" journal browse tab
  When user clicks on an article title
  Then the article page will be displayed

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Journal Add To Favourites
  Given user is on an article page
  Then an add to favourites link is displayed

@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: My Account Favourites
  Given user has signed in as a personal user
  When user opens the my favourites page
  Then there will be favourites listed

#TO BE IMPLEMENTED
@chrome @chrome_m @firefox @bs_pc1 @bs_m1 
Scenario: Ecommerce
  Given user has signed in as a personal user
  And user is on an article with a price
  When user has clicked on the buy button
  And user has opened the shopping cart page
  And user clicks the checkout button
  Then user will be taken to the billing address page
