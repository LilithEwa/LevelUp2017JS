var TopsPage = function TopsPage() {
    this.topsLabel = element(By.css('#categories_block_left > h2'));
    this.fadedShortSleeveTshirtsLabel = element(By.css('a[title="Faded Short Sleeve T-shirts"]'));
}

TopsPage.prototype.getTextTopsLabel = function () {
    var that = this;
    return that.topsLabel.getText();
}

TopsPage.prototype.clickOnFadedShortSleevesLabel = function () {
    var that = this;
    return that.fadedShortSleeveTshirtsLabel.click();
}


module.exports = TopsPage;