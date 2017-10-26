var HomePage = require(pageObjectDir + "/homePage.js");
var homePage = new HomePage();
var DressesPage = require(pageObjectDir + "/dressesPage.js");
var dressesPage = new DressesPage();
var ProductPage = require(pageObjectDir + "/productPage.js");
var productPage = new ProductPage();

var using = require("jasmine-data-provider");

var data = {
    "dress1": {
        'selectorDress': "selectorDress1",
        "cena": "$26.00",
        "opis": "Printed Dress"
    },
    "dress2": {
        'selectorDress': "selectorDress2",
        "cena": "$50.99",
        "opis": "Printed Dress"
    },
    "dress3": {
        'selectorDress': "selectorDress3",
        "cena": "$28.98",
        "opis": "Printed Summer Dress"
    },
    "dress4": {
        'selectorDress': "selectorDress4",
        "cena": "$30.50",
        "opis": "Printed Summer Dress"
    },
    "dress5": {
        'selectorDress': "selectorDress5",
        "cena": "$16.40",
        "opis": "Printed Chiffon Dress"
    },
}

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



