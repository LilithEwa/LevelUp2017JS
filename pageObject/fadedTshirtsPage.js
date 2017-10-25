var FadedTshirtsPage = function FadedTshirtsPage() {
    this.titleLabel = element(By.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1'));
    
    this.newLabel = element(By.css('#product_condition > span'));
    this.selectSizeSelector = element(By.css('#group_1'));
    this.selectSizeM = element(By.css('#group_1 > option:nth-child(2)'));
    this.selectedSize = element(By.css('#uniform-group_1 > span'));
    this.addToCart = element(By.css('#add_to_cart > button > span'));
    this.addedToCartPage = element(By.css('img[title="Faded Short Sleeve T-shirts"]'));
    this.cartLabel = element(By.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b'));
    this.priceLabel = element(By.css('#our_price_display'));

    FadedTshirtsPage.prototype.isDescriptionLongerThan = function (isLongerThan) {
        return new Promise(function (resolve) {
            description = element(By.css('#short_description_content > p'));
            description.getText().then(function (text) {
                resolve(text.length > isLongerThan);
            })
        })
    }



}
module.exports = FadedTshirtsPage;