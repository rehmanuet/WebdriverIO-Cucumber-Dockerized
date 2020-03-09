Feature: Cucumber Check
  I should be able to search NorhBay on Google

  Scenario: open webpage
    Given Open Google website
    When User type the keyword NorthBay
    Then Click on Search
