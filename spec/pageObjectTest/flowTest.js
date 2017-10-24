var HomePage = require(pageObjectDir + "/homePage.js");
var homePage = new HomePage();
var ContactUsPage = require(pageObjectDir + "/contactUsPage.js");
var contactUsPage = new ContactUsPage();

describe('Protractor Demo App', function () {
    it('should have a title', function () {

        // browser.waitForAngularEnabled(false);
        browser.get(homePage.URL);
        homePage.contactUsLink.click();

        expect(contactUsPage.customerServiceLabel.getText()).toEqual('CUSTOMER SERVICE - CONTACT US');
    });

    it('should see customer service label', function () {

        // browser.waitForAngularEnabled(false);

        expect(contactUsPage.customerServiceLabel.isDisplayed());
    });

    it('should submit button be displayed', function () {

        // browser.waitForAngularEnabled(false);

        expect(contactUsPage.submitButton.isDisplayed());
    });
});
