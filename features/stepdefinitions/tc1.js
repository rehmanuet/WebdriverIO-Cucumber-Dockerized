
var expect = require('chai').expect

const { Then, Given,When } = require('cucumber');


Given('Open Google website',() => {
  
    browser.url("http://www.google.com");
    


});
When('User type the keyword NorthBay',() => {
    expect(browser.getUrl()).to.equal("https://www.google.com/?gws_rd=ssl")

    $('//*[contains(@name, "q")]').click()
    browser.keys("NorthBay")


});
Then('Click on Search',() => {
  
    var ee= $('//*[contains(@aria-label, "Google Search")]')
    browser.pause(4000)
    ee.click()
    browser.pause(4000)
    
    

});