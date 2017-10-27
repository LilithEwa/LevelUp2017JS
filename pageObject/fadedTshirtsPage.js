var FadedTshirtsPage = function FadedTshirtsPage() {
    this.descriptionLabel = element(By.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1'));
    this.newLabel = element(By.css('#product_condition > span'));
    this.selectSizeSelector = element(By.css('#group_1'));
    this.selectSizeMSelector = element(By.css('#group_1 > option:nth-child(2)'));
    this.selectedSize = element(By.css('#uniform-group_1 > span'));
    this.addToCartSelector = element(By.css('#add_to_cart > button > span'));
    this.addedToCartPage = element(By.css('img[title="Faded Short Sleeve T-shirts"]'));
    this.cartLabelSelector = element(By.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b'));
    this.priceLabel = element(By.css('span#our_price_display'));

    FadedTshirtsPage.prototype.isDescriptionLongerThan = function (isLongerThan) {
        return new Promise(function (resolve) {
            description = element(By.css('#short_description_content > p'));
            description.getText().then(function (text) {
                resolve(text.length > isLongerThan);
            })
        })
    }
    FadedTshirtsPage.prototype.getTextFromNewLabel = function () {
        var that = this;
        return that.newLabel.getText();
    }

    FadedTshirtsPage.prototype.selectSizeButton = function () {
        var that = this;
        return that.selectSizeSelector.click();
    }

    FadedTshirtsPage.prototype.selectSizeM = function () {
        var that = this;
        return that.selectSizeMSelector.click();
    }

    FadedTshirtsPage.prototype.getSize = function () {
        var that = this;
        return that.selectedSize.getText();
    }
    FadedTshirtsPage.prototype.getDescriptionFromProduct = function () {
        var that = this;
        return that.descriptionLabel.getText();
    }
    FadedTshirtsPage.prototype.addToCart = function () {
        var that = this;
        return that.addToCartSelector.click();
    }

    FadedTshirtsPage.prototype.clickOnCart = function () {
        var that = this;
        return that.cartLabelSelector.click();
    }

    FadedTshirtsPage.prototype.getPrice = function () {
        var that = this;
        return that.priceLabel.getText();
    }

}
module.exports = FadedTshirtsPage;