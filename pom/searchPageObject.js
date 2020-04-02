const chai = require("chai");
var assert = chai.assert;

class KayakPage {
    get searchTab() {
        return $('[href="/hotels"]');
    }

    get originField() {
        return $('//*[contains(@class, "selectTextOnFocus")]');
    }

    get startDate() {
        const myStartDate = new Date(new Date().getTime());
        return myStartDate.toJSON().split("T")[0];
    }

    get endDate() {
        const myEndDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
        return myEndDate.toJSON().split("T")[0];
    }

    formatingDates(input) {
        const pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
        if (!input || !input.match(pattern)) {
            return null;
        }
        return input.replace(pattern, '$2/$3/$1');
    }

    get setFirstDate() {
        return $('//*[contains(@class, "startDate")]');
    }

    get searchFlight() {
        return $('//*[contains(@title, "Search hotels")]')

    }
    get errorMessage() {
        return $('.errorContent .errorMessages li')

    }


    startSearch() {
        this.searchTab.click()

        browser.waitUntil(function() {
            return browser.getTitle() === 'Hotels: Find Cheap Hotel Deals & Discounts - KAYAK'
        }, 10000, 'Hotel Page is not opened properly');
        this.originField.waitForExist(5000);
        this.originField.click();
    }
    setDate() {
        this.setFirstDate.click();
        browser.pause(2000);
        browser.keys("\ue004");
        browser.pause(2000);
        browser.keys("\ue004");
        const myEndDate = this.formatingDates(this.endDate);
        browser.keys(myEndDate);
    }

    endSearch() {
        this.searchFlight.click();
        this.errorMessage.isDisplayed(10000)
        browser.takeScreenshot()
        assert.equal(this.errorMessage.getText(), 'Please enter a city, hotel name or landmark.');
        browser.pause(3000)

    }
}


module.exports = new KayakPage();