var ProductPage = function ProductPage() {

    var productName = element(By.css("div.pb-center-column.col-xs-12.col-sm-4 > h1"));
    var productPrice = element(By.css("#our_price_display"));

    this.getProductName = function () {
        return productName.getText();
    }

    this.getProductPrice = function () {
        return productPrice.getText()
    }
}
module.exports = ProductPage;