var HomePage = function HomePage() {
    this.URL = 'http://automationpractice.com/index.php';
    this.cartLabel = element(By.css('.shopping_cart'));
    this.contactUsLink = element(By.css('#contact-link'));
    this.womenLabelOnHomePage = element(By.css('#block_top_menu > ul > li:nth-child(1) > a'));
    this.dressesLabelOnHomePage = element(By.css('#block_top_menu > ul > li:nth-child(2) > a'));
}
HomePage.prototype.clickWomanLabel = function () {
    var that = this;
    return that.womenLabelOnHomePage.click();
}

module.exports = HomePage;