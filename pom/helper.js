const HomePage = require('../pom/utils.js');


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
        browser.pause(3000);
        browser.keys("BCN");
        browser.pause(3000);
        browser.keys("\uE007");
        browser.waitUntil(function () {
            return HomePage.originField.getText() === 'Barcelona, Spain - Barcelona-El Prat'
        }, 10000, 'Text is not Entered correctly');

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
        browser.pause(9000);
    }
};
module.exports = {

    SearchPage
};