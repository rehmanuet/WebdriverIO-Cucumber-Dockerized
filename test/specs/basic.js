const assert = require('assert')

describe("Open Kayak website and", function() {

    it('should book a flight',  () => {

        browser.url('https://www.kayak.com/')
         $('[href="/hotels"]').click()
        browser.pause(2000)
        const ww= $('//*[contains(@id, "fieldGridLocationCol")]')
        ww.click()
        browser.pause(8000)
        browser.keys("BCN")
         browser.pause(3000)

        browser.keys("\uE007"); 
        browser.pause(3000)

        $('//*[contains(@class, "startDate")]').click()
        browser.pause(3000)
        browser.keys("\ue004"); 
        browser.keys("\ue004"); 
        

        var myEndDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
        myEndDate =myEndDate.toJSON().split("T")[0]
        var pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
        myEndDate=myEndDate.replace(pattern, '$2/$3/$1');
        browser.keys(myEndDate);
        browser.takeScreenshot();

        browser.pause(3000)
        browser.keys("\uE007"); 

        browser.pause(3000)
        $('//*[contains(@title, "Search hotels")]').click()
        browser.pause(9000)
        
    })
})