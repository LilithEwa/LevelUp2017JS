var FadedTshirtsPage = function FadedTshirtsPage(){
    this.titleLabel = element(By.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1'));
    this.newLabel = element(By.css('#product_condition > span'));
    this.selectSizeSelector = element(By.css('#group_1'));
    this.selectSizeM = element(By.css('#group_1 > option:nth-child(2)'));
    this.selectedSize = element(By.css('#uniform-group_1 > span'));
    this.addToCart = element(By.css('#add_to_cart > button > span'));
    this.addedToCartPage = element(By.css('#layer_cart_product_title'));
}
module.exports = FadedTshirtsPage;