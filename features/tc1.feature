# title.feature
Feature: Cucumber Check
  I should be able to go to a website

Scenario: open webpage
  Given Open Google website
  When User type the keyword NorthBay
  Then Click on Search
