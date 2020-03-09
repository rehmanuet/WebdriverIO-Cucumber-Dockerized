const Page = require('../pom/utils.js');

const hotel_page = {
    startSearch: () => {
        Page.hotelPage().click();
        browser.pause(3000);
        Page.origin().waitForExist(5000);
        Page.origin().click();
        browser.pause(3000);
        browser.keys("BCN");
        browser.pause(3000);
        browser.keys("\uE007");
    },
    setDate: () => {
        Page.firstDate().click();
        browser.pause(3000);
        browser.keys("\ue004");
        browser.pause(2000);
        browser.keys("\ue004");

        const myEndDate = Page.formatingDates(Page.endDate());

        browser.keys(myEndDate);

    },
    endSearch: () => {
        Page.searchButton().click();
        browser.pause(9000);
    }
};
module.exports = {

    hotel_page
};