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

describe('Protractor Demo App', function () {
    var product;
    it('should have a title Women', function () {

        browser.get(homePage.URL);
        homePage.womenLabelOnHomePage.click();

        expect(womenPage.womenLabel.getText()).toEqual('WOMEN');
    });

    it('should have a title Tops', function () {

        womenPage.topsLabelOnWomenPage.click();

        expect(topsPage.topsLabel.getText()).toEqual('TOPS');
    });

    it('should have a length 8', function () {

        topsPage.fadedShortSleeveTshirtsLabel.click();

        fadedTshirtsPage.isDescriptionLongerThan(8).then(function (IsDescription) {
            expect(IsDescription).toBeTruthy();
        });
    });

    it('should have a description "new"', function () {

        expect(fadedTshirtsPage.newLabel.getText()).toEqual('New');
    });

    it('should choose size M', function () {

        fadedTshirtsPage.selectSizeSelector.click();
        fadedTshirtsPage.selectSizeM.click();
        expect(fadedTshirtsPage.selectedSize.getText()).toEqual('M');

        
    });

    // it('Click cart label 2 times', function () {
    //     fadedTshirtsPage.cartLabel.click();
    //     fadedTshirtsPage.cartLabel.click();
    //     })
        
    it('Check product and price', function () {
        fadedTshirtsPage.titleLabel.getText().then(function (text) {
           product = text;
            expect(text).toBeTruthy();
            console.log(text);
            fadedTshirtsPage.addToCart.click();
            fadedTshirtsPage.cartLabel.click();
            fadedTshirtsPage.cartLabel.click();
            expect(product).toContain('Faded Short Sleeve T-shirts');
            expect(cartPage.productDescriptionLabel.getText()).toContain(product);
        });

        // fadedTshirtsPage.addToCart.click();
        // fadedTshirtsPage.cartLabel.click();
        // fadedTshirtsPage.cartLabel.click();
        // expect(product).toContain('Faded Short Sleeve T-shirts');
        // expect(cartPage.productDescriptionLabel.getText()).toContain(product);
        //expect(product).toContain(cartPage.productDescriptionLabel)
        // price = fadedTshirtsPage.priceLabel.getText();

        // fadedTshirtsPage.addToCart.click();
        // fadedTshirtsPage.cartLabel.click();
        // fadedTshirtsPage.cartLabel.click();
        // expect(product).toContain(cartPage.productDescriptionLabel.getText());
        // expect(price).toContain(cartPage.priceLabel.getText());
        
        })
        
});

