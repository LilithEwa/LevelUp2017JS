var HomePage = require(pageObjectDir + "/homePage.js");
var homePage = new HomePage();
var DressesPage = require(pageObjectDir + "/dressesPage.js");
var dressesPage = new DressesPage();
var ProductPage = require(pageObjectDir + "/productPage.js");
var productPage = new ProductPage();
var data = require(testDataDir + "/data.js");

describe('Protractor Demo App', function () {

    using(data, function (dress) {

        it('should have a title Dresses', function () {
            browser.get(dressesPage.URL);
            expect(dressesPage.getTitleDresses()).toEqual('Dresses - My Store');
        })

        it('should have a product name', function () {
            dressesPage[dress.selectorDress].click();
            expect(productPage.getProductName()).toEqual(dress.opis);
        })

        it('should have a product price', function () {
            expect(productPage.getProductPrice()).toEqual(dress.cena);
        })
    });
});



