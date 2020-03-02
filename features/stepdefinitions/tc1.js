
const { Then, Given } = require('cucumber');

// const expect = require('chai').expect;

Given('Open Google website',() => {
  
    browser.url("http://www.google.com");
});
