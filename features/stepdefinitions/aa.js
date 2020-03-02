
const { Then, Given } = require('cucumber');

// const expect = require('chai').expect;

Given('Open Google website',() => {
  
    browser.url("http://www.google.com");
});

// Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
//     expect(browser.getTitle()).to.be.eql(title);
