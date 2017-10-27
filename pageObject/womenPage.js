var WomenPage = function WomenPage() {
    this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    this.womenLabel = element(By.css('#categories_block_left > h2'));
    this.topsLabelOnWomenPage = element(By.css('#categories_block_left > div > ul > li:nth-child(1) > a'));
}

    WomenPage.prototype.clickTopslabel = function () {
        var that = this;
        return that.topsLabelOnWomenPage.click();
    }

    WomenPage.prototype.getTextWomenLabel = function () {
        var that = this;
        return that.womenLabel.getText();
    }

module.exports = WomenPage;