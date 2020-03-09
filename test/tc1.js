const kayak = require('../pom/helper.js');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();


describe("Open Kayak (POM)", function () {
    it('should book a flight', () => {
        browser.setTimeout({'implicit': 5000});
        browser.url('https://www.kayak.com/');
        kayak.hotel_page.startSearch();
        kayak.hotel_page.setDate();
        kayak.hotel_page.endSearch();

    });
    it.skip('Dry Test to handle Chai-Promised-Assrstion', () => {
        browser.url('http://the-internet.herokuapp.com/dynamic_controls');
        $('.example #checkbox-example button').click();
        browser.waitUntil(() => {
            return (Promise.resolve($('.example #checkbox-example #message').getText()).should.eventually
                                                                            .equal("It's back!")) === false
        }, 5000, 'expected text to be different after 5s');

    })
});