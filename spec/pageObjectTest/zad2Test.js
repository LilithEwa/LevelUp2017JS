var HomePage = require(pageObjectDir + "/homePage.js");
var homePage = new HomePage();
var WomenPage = require(pageObjectDir + "/womenPage.js");
var womenPage = new WomenPage();
var TopsPage = require(pageObjectDir + "/topsPage.js");
var topsPage = new TopsPage();
var FadedTshirtsPage = require(pageObjectDir + "/fadedTshirtsPage.js");
var fadedTshirtsPage = new FadedTshirtsPage();

describe('Protractor Demo App', function () {
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
            var isLabelLongerThan = function(isLongerThan){
            return new Promise(function(resolve){
            fadedTshirtsPage.titleLabel.getText().then(function(text){
            expect(text.length).toBeGreaterThan(isLongerThan);
            })
            }); 
            }
            isLabelLongerThan(8).then( console.log) 
            }); 

    it('should have a description "new"', function () {
                
            expect(fadedTshirtsPage.newLabel.getText()).toEqual('New');
            });        

    it('should choose size M', function () {
                
            fadedTshirtsPage.selectSizeSelector.click();
            fadedTshirtsPage.selectSizeM.click();
            expect(fadedTshirtsPage.selectedSize.getText()).toEqual('M');
            fadedTshirtsPage.addToCart.click();
            expect(fadedTshirtsPage.addedToCartPage.getText()).toEqual('Faded Short Sleeve T-shirts');
            });



            

//     it('should see customer service label', function () {

//         // browser.waitForAngularEnabled(false);

//         expect(contactUsPage.customerServiceLabel.isDisplayed()).toBeTruthy();
//     });

//     it('should submit button be displayed', function () {

//         // browser.waitForAngularEnabled(false);

//         expect(contactUsPage.submitButton.isDisplayed()).toBeTruthy();
//     });
});
