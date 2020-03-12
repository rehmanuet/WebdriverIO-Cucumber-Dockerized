const expect = require('chai').expect;


const {Then, Given, When} = require('cucumber');


Given('Open Google website', () => {

    browser.url("http://www.google.com");


});
When('User type the keyword NorthBay', () => {
    expect(browser.getUrl()).to.equal("https://www.google.com/?gws_rd=ssl");
    let search = $('//*[contains(@name, "q")]');
    search.click();
    search.setValue("NorthBay")


});
Then('Click on Search', () => {

    let query = $('//*[contains(@aria-label, "Google Search")]');
    browser.pause(4000);
    query.click();
    browser.pause(4000);


});