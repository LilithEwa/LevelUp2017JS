var TopsPage = function TopsPage(){
    
    this.topsLabel = element(By.css('#categories_block_left > h2'));
    this.fadedShortSleeveTshirtsLabel = element(By.css('a[title="Faded Short Sleeve T-shirts"]'));
}
module.exports = TopsPage;