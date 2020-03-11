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
}


module.exports = new KayakPage();
