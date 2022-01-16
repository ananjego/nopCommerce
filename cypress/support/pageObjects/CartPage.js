class CartPage {

    getTermsOfService() {
        return cy.get('#termsofservice');
    }

    getCheckoutButton() {
        return cy.get('#checkout');
    }

    validateProductName(htcOneMiniCellPhone) {
        return cy.get('.product-name').should('have.text', htcOneMiniCellPhone)
    }

    validateProductUnitPrice(htcOneMiniCellPhonePrice) {
        return cy.get('.product-unit-price').should('have.text', htcOneMiniCellPhonePrice);
    }

    validateProductQuantity(productQuantity) {
        return cy.get('td.quantity input').should('have.value', productQuantity);
    }

    validateProductTotalPrice(productTotalPrice) {
        return cy.get('.product-subtotal').contains(productTotalPrice);
    }

    validateOrderSubtotalPrice(orderSubtotalPrice) {
        return cy.get('.order-subtotal > .cart-total-right > .value-summary').should('have.text', orderSubtotalPrice);
    }

    validateShippingCost(shippingCost) {
        return cy.get('.shipping-cost > .cart-total-right > .value-summary').should('have.text', shippingCost);
    }

    validateTaxValue(taxValue) {
        return cy.get('.tax-value > .cart-total-right > .value-summary').should('have.text', taxValue);
    }

    getOrderTotalPrice(orderTotalPrice) {
        return cy.get('.value-summary > strong').should('have.text', orderTotalPrice);
    }

    validateShoppingCart(htcOneMiniCellPhone, htcOneMiniCellPhonePrice, productQuantity, productTotalPrice, orderSubtotalPrice, shippingCost, taxValue, orderTotalPrice) {
        this.validateProductName(htcOneMiniCellPhone)
        this.validateProductUnitPrice(htcOneMiniCellPhonePrice)
        this.validateProductQuantity(productQuantity)
        this.validateProductTotalPrice(productTotalPrice)
        this.validateOrderSubtotalPrice(orderSubtotalPrice)
        this.validateShippingCost(shippingCost)
        this.validateTaxValue(taxValue)
        this.getOrderTotalPrice(orderTotalPrice)
    }

}

export default CartPage;