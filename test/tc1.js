const SearchPage = require('../pom/searchPageObject.js');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.should();


describe("Navigate to Kayak's Hotel Page", function() {


    before("via browser", function() {
        browser.setTimeout({
            'implicit': 5000
        });
        browser.url('https://www.kayak.com/');
    });

    it('should give an error popup on searching with empty location', () => {
        SearchPage.startSearch()
        SearchPage.setDate();
        SearchPage.endSearch()
    });
    it.skip('Dry Test to handle Chai-Promised-Assertion', () => {
        browser.url('http://the-internet.herokuapp.com/dynamic_controls');
        $('.example #checkbox-example button').click();
        browser.waitUntil(() => {
            return (Promise.resolve($('.example #checkbox-example #message').getText()).should.eventually
                .equal("It's back!")) === false
        }, 5000, 'expected text to be different after 5s');

    })

});