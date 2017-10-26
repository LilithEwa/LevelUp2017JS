var DressesPage = function DressesPage() {

    this.URL = "http://automationpractice.com/index.php?id_category=8&controller=category";
    this.selectorDress1 = element(By.css("ul[class='product_list grid row'] li:nth-child(1) div[class='left-block']"));
    this.selectorDress2 = element(By.css("ul[class='product_list grid row'] li:nth-child(2) div[class='left-block']"));
    this.selectorDress3 = element(By.css("ul[class='product_list grid row'] li:nth-child(3) div[class='left-block']"));
    this.selectorDress4 = element(By.css("ul[class='product_list grid row'] li:nth-child(4) div[class='left-block']"));
    this.selectorDress5 = element(By.css("ul[class='product_list grid row'] li:nth-child(5) div[class='left-block']"));
    this.dressesLabel = element(By.css("#block_top_menu > ul > li.sfHoverForce > a"));

    this.getTitleDresses = function () {
        return browser.getTitle();
    }
}
module.exports = DressesPage;