
var obj2 = require('../pom/utils.js')

var hotel_page = {
    startSearch:  () => {
        obj2.hotelPage().click()
        obj2.origin().click()
        browser.pause(8000)
        browser.keys("BCN")
         browser.pause(3000)
        browser.keys("\uE007"); 
    },
    setDate:  () => {
        obj2.firstDate().click()
        browser.pause(3000)
        browser.keys("\ue004"); 
        browser.pause(2000)
        browser.keys("\ue004"); 

        var myEndDate = obj2.formatingDates(obj2.endDate())

        browser.keys(myEndDate);

    },
    endSearch:  () => {
        obj2.searchButton().click()
        browser.pause(9000)
    }
}
module.exports = {

    hotel_page
};