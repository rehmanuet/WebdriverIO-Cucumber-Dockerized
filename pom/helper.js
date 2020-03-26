const HomePage = require('../pom/utils.js');
const chai = require("chai");

var assert = chai.assert;

const SearchPage = {
    startSearch: () => {

        HomePage.searchTab.click();
        browser.waitUntil(function () {
            return browser.getTitle() === 'Hotels: Find Cheap Hotel Deals & Discounts - KAYAK'
        }, 10000, 'Hotel Page is not opened properly');
        HomePage.originField.waitForExist(5000);
        browser.waitUntil(function () {
            return HomePage.originField.isDisplayed() === true
        }, 10000, 'Text field is not be shown');
        HomePage.originField.click();

    },
    setDate: () => {
        
        HomePage.setFirstDate.click();
        browser.pause(3000);
        browser.keys("\ue004");
        browser.pause(2000);
        browser.keys("\ue004");
        const myEndDate = HomePage.formatingDates(HomePage.endDate);
        browser.keys(myEndDate);

    },
    endSearch: () => {

        HomePage.searchFlight.click();
        browser.waitUntil(function () {
            return HomePage.errorMessage.isDisplayed() === true
        }, 10000, 'Error Message is not shown');
        assert.equal(HomePage.errorMessage.getText(), 'Please enter a city, hotel name or landmark.');

    }
};
module.exports = {

    SearchPage
    
};