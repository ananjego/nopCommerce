class ElectronicsPage {

    getPageTitle() {
        return cy.get('h1');
    }

    selectHeaderElectronicsButton() {
        return cy.get('.notmobile > :nth-child(2) > [href="/electronics"]').click();
    }

    validateElectronicsPageTitle(electronicsPageTitle) {
        return cy.get('h1').should('have.text', electronicsPageTitle);
    }

    selectCellPhonesTitle() {
        return cy.get(':nth-child(2) > .sub-category-item > .title > a').click();
    }

    validateCellPhonesTitle(cellPhonesPageTitle) {
        return cy.get('h1').should('have.text', cellPhonesPageTitle);
    }

    validateHtcOneMiniCellPhoneImage() {
        return cy.get(':nth-child(2) > .product-item > .picture > a > img').should('be.visible');
    }

    validateHtcOneMiniCellPhone(htcOneMiniCellPhone) {
        return cy.get(':nth-child(2) > .product-item > .details > .product-title > a').should('have.text', htcOneMiniCellPhone);
    }

    validateHtcOneMiniCellPhonePrice(htcOneMiniCellPhonePrice) {
        return cy.get(':nth-child(2) > .product-item > .details > .add-info > .prices > .price').should('have.text', htcOneMiniCellPhonePrice);
    }

    selectAddToCartButton() {
        return cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click();
    }

    validateAddToShoppingCartSuccessMsg(addToShoppingCartSuccessMsg) {
        return cy.get('.content').should('have.text', addToShoppingCartSuccessMsg);
    }

    selectShoppingCartLink() {
        return cy.get('.content > a').click();
    }

    validateElectronicsPage(electronicsPageTitle) {
        this.selectHeaderElectronicsButton()
        this.validateElectronicsPageTitle(electronicsPageTitle)
    }

    validateCellPhonePage(cellPhonesPageTitle, htcOneMiniCellPhone, htcOneMiniCellPhonePrice) {
        this.selectCellPhonesTitle()
        this.validateCellPhonesTitle(cellPhonesPageTitle)
        this.validateHtcOneMiniCellPhoneImage()
        this.validateHtcOneMiniCellPhone(htcOneMiniCellPhone)
        this.validateHtcOneMiniCellPhonePrice(htcOneMiniCellPhonePrice)
    }

    addToCart(addToShoppingCartSuccessMsg) {
        this.selectAddToCartButton()
        this.validateAddToShoppingCartSuccessMsg(addToShoppingCartSuccessMsg)
        this.selectShoppingCartLink()
    }

}

export default ElectronicsPage;
