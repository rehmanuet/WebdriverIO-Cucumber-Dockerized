const expect = require('chai').expect;


const {
	Then,
	Given,
	When
} = require('cucumber');


Given(/^I am on the search page$/, () => {

	browser.url("http://www.google.com");

});

When(/^I enter "([^"]*)?" into the search box$/, (query) => {

	expect(browser.getUrl()).to.contains("https://www.google.com");
	let search = $('//*[contains(@name, "q")]');
	search.click();
	search.setValue(query)

});

Then(/^I click the search button$/, () => {

	let query = $('//*[contains(@aria-label, "Google Search")]');
	browser.pause(4000);
	query.click();

});

Then(/^I should see a list of search results$/, () => {

	browser.pause(5000);

});