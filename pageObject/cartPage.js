var CartPage = function CartPage() {
    this.productDescriptionLabel = element(By.css('#product_1_3_0_0 > td.cart_description > p > a'));
    this.priceLabel = element(By.css('#total_product_price_1_3_0'));
}

CartPage.prototype.getDescriptionFromProduct = function () {
    var that = this;
    return that.productDescriptionLabel.getText();
}

CartPage.prototype.getPrice = function () {
    var that = this;
    return that.priceLabel.getText();
}

module.exports = CartPage;