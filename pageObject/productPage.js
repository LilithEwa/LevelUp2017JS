var ProductPage = function ProductPage() {

    this.productName = element(By.css("div.pb-center-column.col-xs-12.col-sm-4 > h1"));
    this.productPrice = element(By.css("#our_price_display"));

    ProductPage.prototype.getProductName = function () {
        var that = this;
        return that.productName.getText();
    }

    ProductPage.prototype.getProductPrice = function () {
        var that = this;
        return that.productPrice.getText();
    }
}
module.exports = ProductPage;