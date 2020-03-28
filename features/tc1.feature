Feature: Performing the Google Search

    As a user on the Google search page
    I want to search for anything
    To get a list of search results

  Scenario: Performing a search operation
    Given I am on the search page
     When I enter "NorthBay" into the search box
     Then I click the search button
     Then I should see a list of search results
