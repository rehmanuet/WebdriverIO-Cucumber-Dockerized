const HomePage = require('../pom/utils.js');


const SearchPage = {
    startSearch: () => {

        HomePage.searchTab.click()
        browser.pause(3000);
        HomePage.originField.waitForExist(5000);
        HomePage.originField.click()
        browser.pause(3000);
        browser.keys("BCN");
        browser.pause(3000);
        browser.keys("\uE007");
    },
    setDate: () => {
        HomePage.setFirstDate.click()
        browser.pause(3000);
        browser.keys("\ue004");
        browser.pause(2000);
        browser.keys("\ue004");
        const myEndDate = HomePage.formatingDates(HomePage.endDate)
        browser.keys(myEndDate);

    },
    endSearch: () => {

        HomePage.searchFlight.click();
        browser.pause(9000);
    }
}
module.exports = {

    SearchPage
};