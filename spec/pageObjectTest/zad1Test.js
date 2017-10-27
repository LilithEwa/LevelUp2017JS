var HomePage = require(pageObjectDir + "/homePage.js");
var homePage = new HomePage();
var WomenPage = require(pageObjectDir + "/womenPage.js");
var womenPage = new WomenPage();
var TopsPage = require(pageObjectDir + "/topsPage.js");
var topsPage = new TopsPage();
var FadedTshirtsPage = require(pageObjectDir + "/fadedTshirtsPage.js");
var fadedTshirtsPage = new FadedTshirtsPage();
var CartPage = require(pageObjectDir + "/cartPage.js");
var cartPage = new CartPage();
var date = require(testDataDir + "/data.js");

describe('Protractor Demo App', function () {
    var product;

    it('should have a title Women', function () {
        browser.get(homePage.URL);
        homePage.clickWomanLabel();
        expect(womenPage.getTextWomenLabel()).toEqual('WOMEN');
    });

    it('should have a title Tops', function () {
        womenPage.clickTopslabel();
        expect(topsPage.getTextTopsLabel()).toEqual('TOPS');
    });

    it('should have a length 8', function () {
        topsPage.clickOnFadedShortSleevesLabel();
        fadedTshirtsPage.isDescriptionLongerThan(8).then(function (IsDescription) {
            expect(IsDescription).toBeTruthy();
        });
    });

    it('should have a description "new"', function () {
        expect(fadedTshirtsPage.getTextFromNewLabel()).toEqual('New');
    });

    it('should choose size M', function () {
        fadedTshirtsPage.selectSizeButton();
        fadedTshirtsPage.selectSizeM();
        expect(fadedTshirtsPage.getSize()).toEqual('M');
    });
        
    it('Check product', function () {
        fadedTshirtsPage.getDescriptionFromProduct().then(function (text) {
           product = text;
            expect(text).toBeTruthy();
            fadedTshirtsPage.addToCart();
            fadedTshirtsPage.clickOnCart();
            fadedTshirtsPage.clickOnCart();
            expect(cartPage.getDescriptionFromProduct()).toContain(product);
        });

    it('Check price', function () {
            fadedTshirtsPage.getPrice().then(function (text) {
               product = text;
                expect(text).toBeTruthy();
                fadedTshirtsPage.addToCart();
                fadedTshirtsPage.clickOnCart();
                fadedTshirtsPage.clickOnCart();
                expect(cartPage.getPrice()).toContain(product);
            });
        });
    });
});
       

       
        

