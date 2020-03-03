var kayak = require('../pom/helper.js')


describe("Open Kayak (POM)", function() {

    it('should book a flight',  () => {

        browser.url('https://www.kayak.com/')
        kayak.hotel_page.startSearch()
        kayak.hotel_page.setDate()
        kayak.hotel_page.endSearch()

    })
})