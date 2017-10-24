var ContactUsPage = function ContactUsPage(){
    this.URL = 'http://automationpractice.com/index.php?controller=contact';
    this.customerServiceLabel = element(By.css('#center_column > h1'));
    this.subjectHeadingLabel = element(By.css('#id_contact'));
    this.submitButton = element(By.css('#submitMessage > span'));
}
module.exports = ContactUsPage;