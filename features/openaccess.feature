Feature: Open Access Test
  As a guest user
  I want to review the basic site functionality without logging in 
  In order to pick up any regressions that may have occured in these areas

Background:
  Given user has accessed the Scitation homepage

@common @chrome @firefox @bs_pc1
Scenario: Quick Search Suggestions
  Given user has entered a three letter string into quick search
  When user selects one of the options
  Then search results page is displayed

@common @chrome @firefox @bs_pc1 @bs_m1 @debug
Scenario: Quick Search Filters
  Given user is on search results page after searching for "climate changes in china" 
  When user filters results by topic
  And user removes the filter
  Then full search results will be displayed

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Quick Search More Button
  Given user is on search results page after searching for "search engines" 
  When user clicks the More button at the bottom
  Then 20 more results will be displayed

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Quick Search Sort
  Given user is on search results page after searching for "ingenta" 
  When user sorts by Newest First
  Then the results will be sorted by date

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Quick Search Descriptions
  Given user is on search results page after searching for "vacuum technology video instruction"
  When clicks view description for the first article
  Then the description will be displayed

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Quick Search Refine
  Given user is on search results page after searching for "technology"
  When user refines their search with "computer"
  Then refined search results will be displayed

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Quick Search Physics Today Tab
  Given user is on search results page after searching for "modern history"
  When user reviews the Physics Today tab
  Then results are displayed for physics today

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Quick Search Related Databases tab
  Given user is on search results page after searching for "modern history"
  When user reviews the Related Databases tab
  Then results are displayed for related databases

#Not Implemented - Incorrect Hypothesis
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Advanced Search Empty Search
  #Given user is on advanced search page
  #When user clicks on the Search button
  #Then there will be a pop-up asking you to enter a search term

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Advanced Search Submit
  Given user is on advanced search page
  When user enters keywords "technology" into the first field
  And user enters stop words "what" in the second field
  When user clicks on the Search button
  Then search results page is returned

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Advanced Search Modify Search
  Given user is on search results page after searching for "factory automation"
  When user clicks on Modify Search
  Then user is taken to advanced search page
  And search terms "factory automation" are entered into the fields

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Advanced Search Search Within
  Given user is on advanced search page
  When user enters keywords "computer technology" into the first field
  And user clicks the Search Within Topics button
  And user clicks the All Topics checkbox
  And user selects some items
  And user clicks Submit & Close
  And user clicks on the Search button
  Then search results are displayed only for these topics

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Conference Proceedings Browse
  When user has clicked on the Publications link
  And user has selected "AIP Conference Proceedings"
  And user has selected Browse Titles
  And user has clicked on a Conference Proceeding link
  And user has selected a Conference Paper
  Then the conference paper will be displayed
  And there will be a list of related content on the Related tab

#Not Implemented - Scenario Outline Unsupported
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario Outline: Institutional User Sign In
  #When user has clicked on the sign in link
  #And user has entered a institutional username <username>
  #And user has entered a <validity> password <password>
  #And user clicks Sign In button
  #Then <outcome>
#
  #Examples:
  #|validity   |username |password |outcome                |
  #|invalid      |academy1 |abcd     |user is not authorized |
  #|valid    |xyz |bonnie   |user is logged in      |

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Topic Page
  Given user is on topics page
  When user clicks on go to topic link beside topic "Energy"
  Then "Energy" topic page will be displayed

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Topic Page Refine
  Given user is on topic page "Mathematical physics"
  When user submits a refine search with "gas"
  Then results are filtered by "gas"
  When user clicks return to topic page results
  Then full topic results will be displayed

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Topic Page Pagination
  Given user is on topic page "Mathematical physics"
  When user clicks the next button at the bottom of the page
  Then the next page of results will be displayed

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Topic Page Facets
  Given user is on topic page "Mathematical physics"
  When user clicks a topic in the topic facet
  Then results are filtered by topic
  When user clicks the Physics Today tab
  Then results will also be filtered by topic

@common @chrome @firefox @bs_pc1 @bs_m1 
Scenario: Topic Page Authors Tab
  Given user is on topic page "Mathematical physics"
  When user selects the authors tab
  Then authors will be displayed that are linked to the topic results

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Topic Page More Specific Topic
  Given user is on topic page "Mathematical physics"
  When user selects a more specific topic "Number theory"
  Then the new "Number theory" page will display 

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Navigate To Author Page
  Given user has entered performed a quick search for an author "R. L. Kustom"
  When user selects the author name "R. L. Kustom"
  And user selects the from scitation link in the pop-up
  Then the "R. L. Kustom" author page is displayed

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Author Page Facets
  Given user is on "Eugenia Etkina" author page
  When user selects a publisher facet
  Then results are filtered by publisher
  When user selects any publisher link
  Then results are no longer filtered by this publisher

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Author Page Sort
  Given user is on "Eugenia Etkina" author page
  When user selects newest first link
  Then results are sorted by date

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Author Page View All Descriptions
  Given user is on "Eugenia Etkina" author page
  When user selects view all descriptions link
  Then all descriptions on the page expand

@common @chrome @firefox @bs_pc1 @bs_m1 
Scenario: Author Page Pagination
  Given user is on "Eugenia Etkina" author page
  When user clicks the next button at the bottom of the author page
  Then the next page of results will be displayed in author page
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1 
#Scenario: Author Page Institution Tab
  #Given user is on an author page
  #And user selects the institution tab
  #When user selects an instution
  #Then institution page is displayed
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Institution Page Facets
  #Given user is on an institution page
  #And user selects a publisher facet
  #And results are filtered by publisher
  #When user selects any publisher link
  #Then results are no longer filtered by this publisher
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Institution Page Sort
  #Given user is on an institution page
  #When user selects newest first link
  #Then results are sorted by date
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Institution Page View All Descriptions
  #Given user is on an institution page
  #When user selects view all descriptions link
  #Then all deshehehcriptions on the page expand
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Institution Page Pagination
  #Given user is on an institution page
  #When user clicks the next button at the bottom of the page
  #Then the next page of results will be displayed
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Navigate to Collections Page
  #Given user has clicked on the collections link in the header
  #Then user is taken to the collections page
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Collections Page Sort
  #Given user is on the collections page
  #When user selects oldest first link
  #Then results are sorted by date
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Collections Page Pagination
  #Given user is on the collections page
  #When user clicks the next button at the bottom of the page
  #Then the next page of results will be displayed
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Collections Page Facets
  #Given user is on the collections page
  #And user selects a year facet
  #And results are filtered by year
  #When user selects any year link
  #Then results are no longer filtered by this year
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Collections Page Alphabet links
  #Given user is on the collections page
  #When user selects a letter from the top of the page
  #Then the results are filtered by this letter
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Collection Page
  #Given user is on the collections page
  #When user clicks on a collection title
  #Then the collection page is displayed
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Collection Page Twitter Icon
  #Given user is on a collection page
  #When user clicks on the twitter icon
  #Then the twitter login page opens in a new tab
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Collection Page More Link
  #Given user is on a collection page
  #When user clicks on the more link
  #Then up to 20 more results will be displayed
#
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Collection Page Article Link
  #Given user is on a collection page
  #When user clicks on an article title
  #Then the article page is displayed
#
#Partially Implemented
@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Successful Registration
  Given user is on the registration page
  When user has completed all fields
  And user has waited for 5 seconds
  And user clicks on the registration button
  Then user will be taken to the registration success page
#
#Partially Implemented
@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Unsuccessful Registration
  Given user is on the registration page
  And user has completed all fields
  When user clicks on the registration button
  Then user will be taken to the not authorized page

#Not Implemented - Covered
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Navigate To Journal Page
  #Given user is on the publications page
  #When user clicks on a journal title link
  #Then user is taken to the journal page

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Journal Most Read RSS Feeds
  Given user is on "American Journal of Physics" journal page
  When user clicks on the most read rss icon
  Then the rss feed will open
  
#Not Implemented - Covered
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Journal Browse Tab
  #Given user is on a journal page
  #When user clicks on the browse tab
  #Then the issue page is displayed
  
#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Journal Section RSS Feed
  #Given user is on "Biomicrofluidics" journal browse tab
  #When user clicks on a section rss icon
  #Then the rss feed will display for the section

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Journal Email alerts
  Given user is on "Biomicrofluidics" journal browse tab
  When user clicks on the subscribe to email alerts link
  Then the content alerts link will be displayed

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Journal Article
  Given user is on "Biomicrofluidics" journal browse tab
  When user clicks on an article title
  Then the article page will be displayed

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Journal Add To Favourites
  Given user is on an article page
  Then an add to favourites link is displayed

#Not Implemented
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Journal Recommend To Library
  #Given user is on an article page
  #And user clicks on the recommend to library link
  #And user completes all mandatory fields
  #And user waits for 10 seconds
  #When user submits the form
  #Then the dialoge will close
#
#Not Implemented - Not Found
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: My Account Content Alerts
  #Given user has signed in as a personal user
  #When user opens the content alerts view page
  #Then there will be alerts displayed

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: My Account Favourites
  Given user has signed in as a personal user
  When user opens the my favourites page
  Then there will be favourites listed

#TO BE IMPLEMENTED
#Scenario: Ecommerce
  #Given user has signed in as a personal user
  #And user is on an article with a price
  #When user has clicked on the buy button
  #And user has opened the shopping cart page
  #And user clicks the checkout button
  #Then user will be taken to the billing address page

#Not Implemented - Not Found
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: User Admin Navigate To User Account
  #Given user has signed in as an admin username
  #And user is on the administration page
  #When user clicks on the organization link
  #And user selects the people tab
  #And admin searches for a username  
  #And user selects a result
  #Then user is taken to the account page
#
#Not Implemented - Not Found
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Physics Today Print Edition
  #Given user is on the physics today homepage
  #And user clicks on the print edition link
  #Then the print edition page will be displayed
#
#Not Implemented - Not Found
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Print Edition Issues
  #Given user is on the print edition page
  #When user selects a volume
  #And user selects an issue
  #Then that issue will be displayed
#
#Not Implemented - Not Found
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Print Edition Section RSS Feed
  #Given user is on the print edition page
  #When user clicks on a section rss icon
  #Then the rss feed is displayed for this section
#
#Not Implemented - Not Found
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Print Edition Article
  #Given user is on the print edition page
  #When user clicks on a ptol article title
  #Then the ptol article page will be displayed
#
#Not Implemented - Not Found
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Physics Today Daily Edition
  #Given user is on the physics today homepage
  #When user clicks the daily edition dropdown
  #And user selects the news picks link
  #Then the news picks page will be displayed
#
#Not Implemented - Not Found
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: Pending Live
  #Given user is signed in as an admin
  #And user is on the manage pending content page
  #And user searches for all content within the past 6 months
  #When user clicks on an article title
  #Then the article will display with a pending banner

@common @chrome @firefox @bs_pc1 @bs_m1
Scenario: Homepage RSS Feeds
  When user has clicked on the most cited rss icon
  Then the rss feed will be displayed

@common @chrome @firefox @bs_pc1 @bs_m1 
Scenario: Publisher Reports
  Given user has signed in as an admin
  And user is on the site usage reports page
  When user selects a report
  And user completes mandatory fields
  And user submits the form
  Then user is taken to a success page

#Not Implemented - Not Understand
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: COUNTER Reports
  #Given user is signed in as an institutional admin
  #And user is on the usage reports page
  #When user completes mandatory fields
  #And user submits the form
  #Then user is taken to a success page
#
#Not Implemented - Not Understand
#@common @chrome @firefox @bs_pc1 @bs_m1
#Scenario: KBart Reports
  #Given user is on the kbart reports page
  #When user submits a request for an HTML report
  #Then the report opens in a new tab