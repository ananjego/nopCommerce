class CheckoutPage {

    getCheckoutPageTitle() {
        return cy.get('h1');
    }

    getAddressContinueButton() {
        return cy.get('#billing-buttons-container > .new-address-next-step-button');
    }

    validateBillingAddressStepNumber(billingAddressStepNumber) {
        return cy.get('#opc-billing > .step-title > .number').should('have.text', billingAddressStepNumber);
    }

    validateBillingAddressStepTitle(billingAddressStepTitle) {
        return cy.get('#opc-billing > .step-title > .title').should('have.text', billingAddressStepTitle);
    }

    validateShipToSameAddressCheckbox() {
        return cy.get('#ShipToSameAddress').should('be.checked');
    }

    validateBillingAddressFirstName(firstName) {
        return cy.get('#BillingNewAddress_FirstName').should('have.value', firstName);
    }

    validateBillingAddressLastName(lastName) {
        return cy.get('#BillingNewAddress_LastName').should('have.value', lastName);
    }

    validateBillingAddressCompanyName(companyName) {
        return cy.get('#BillingNewAddress_Company').should('have.value', companyName)
    }

    validateBillingAddressEmail(email) {
        return cy.get('#BillingNewAddress_Email').should('have.value', email);
    }

    selectCountry(country) {
        return cy.get('#BillingNewAddress_CountryId').select(country).should('have.value', '167');
    }

    enterCity(city) {
        return cy.get('#BillingNewAddress_City').type(city);
    }

    enterAddress(address) {
        return cy.get('#BillingNewAddress_Address1').type(address);
    }

    enterZipPostalCode(zipPostalCode) {
        return cy.get('#BillingNewAddress_ZipPostalCode').type(zipPostalCode);
    }

    enterPhoneNumber(phoneNumber) {
        return cy.get('#BillingNewAddress_PhoneNumber').type(phoneNumber);
    }

    validateShippingAddressStepNumber(shippingAddressStepNumber) {
        return cy.get('#opc-shipping > .step-title > .number').should('have.text', shippingAddressStepNumber);
    }

    validateShippingAddressStepTitle(shippingAddressStepTitle) {
        return cy.get('#opc-shipping > .step-title > .title').should('have.text', shippingAddressStepTitle);
    }

    validateShippingMethodStepNumber(shippingMethodStepNumber) {
        return cy.get('#opc-shipping_method > .step-title > .number').should('have.text', shippingMethodStepNumber);
    }

    validateShippingMethodStepTitle(shippingMethodStepTitle) {
        return cy.get('#opc-shipping_method > .step-title > .title').should('have.text', shippingMethodStepTitle);
    }

    validateNextDayAirShippingMethodName(nextDayAirShippingMethod) {
        return cy.get(':nth-child(2) > .method-name > label').should('have.text', nextDayAirShippingMethod);
    }

    selectNextDayAirShippingMethodCheckbox() {
        return cy.get('#shippingoption_1').click();
    }

    selectShippingMethodContinueButton() {
        return cy.get('#shipping-method-buttons-container > .button-1').click();
    }

    validatePaymentMethodStepNumber(paymentMethodStepNumber) {
        return cy.get('#opc-payment_method > .step-title > .number').should('have.text', paymentMethodStepNumber);
    }

    validatePaymentMethodStepTitle(paymentMethodStepTitle) {
        return cy.get('#opc-payment_method > .step-title > .title').should('have.text', paymentMethodStepTitle);
    }

    validateCreditCardPaymentMethodName(creditCardShippingMethod) {
        return cy.get(':nth-child(2) > .method-name > .payment-details > label').should('have.text', creditCardShippingMethod);
    }

    selectPaymentMethod() {
        return cy.get('#paymentmethod_1').click();
    }

    selectPaymentMethodContinueButton() {
        return cy.get('#payment-method-buttons-container > .button-1').click();
    }

    validatePaymentInfoStepNumber(paymentInfoStepNumber) {
        return cy.get('#opc-payment_info > .step-title > .number').should('have.text', paymentInfoStepNumber);
    }

    validatePaymentInfoStepTitle(paymentInfoStepTitle) {
        return cy.get('#opc-payment_info > .step-title > .title').should('have.text', paymentInfoStepTitle);
    }

    validateCreditCardType(creditCardType) {
        cy.get('#CreditCardType').find(':selected').should('have.text', creditCardType);
    }

    enterCardHolderName(cardHolderName) {
        return cy.get('#CardholderName').type(cardHolderName);
    }

    enterCardNumber(cardNumber) {
        return cy.get('#CardNumber').type(cardNumber);
    }

    selectCardExpirationMonth(cardExpirationMonth) {
        return cy.get('#ExpireMonth').select(cardExpirationMonth).should('have.value', '5');
    }

    selectCardExpirationYear(cardExpirationYear) {
        return cy.get('#ExpireYear').select(cardExpirationYear).should('have.value', '2026');
    }

    enterCardCode(cardCode) {
        return cy.get('#CardCode').type(cardCode);
    }

    selectPaymentInfoContinueButton() {
        return cy.get('#payment-info-buttons-container > .button-1').click();
    }

    validateConfirmOrderStepNumber(confirmOrderStepNumber) {
        return cy.get('#opc-confirm_order > .step-title > .number').should('have.text', confirmOrderStepNumber);
    }

    validateConfirmOrderStepTitle(confirmOrderStepTitle) {
        return cy.get('#opc-confirm_order > .step-title > .title').should('have.text', confirmOrderStepTitle);
    }

    validateBillingAddressSubtitle(billingAddressSubtitle) {
        return cy.get('.billing-info > .title > strong').should('have.text', billingAddressSubtitle);
    }

    validateBillingInfoName(firstName, lastName) {
        return cy.get('.billing-info > .info-list > .name').contains(firstName + ' ' + lastName);
    }

    validateBillingInfoEmail(emailText, email) {
        return cy.get('.billing-info > .info-list > .email').contains(emailText + email);
    }

    validateBillingInfoPhone(phoneText, phoneNumber) {
        return cy.get('.billing-info > .info-list > .phone').contains(phoneText + phoneNumber);
    }

    validateBillingInfoFax(faxText) {
        return cy.get('.billing-info > .info-list > .fax').contains(faxText);
    }

    validateBillingInfoCompanyName(companyName) {
        return cy.get('.billing-info > .info-list > .company').contains(companyName);
    }

    validateBillingInfoAddress(address) {
        return cy.get('.billing-info > .info-list > .address1').contains(address);
    }

    validateBillingInfoCityZipCode(city, zipPostalCode) {
        return cy.get('.billing-info > .info-list > .city-state-zip').contains(city + ',' + zipPostalCode);
    }

    validateBillingInfoCountry(country) {
        return cy.get('.billing-info > .info-list > .country').contains(country);
    }

    validatePaymentMethodSubtitle(paymentSubtitle) {
        return cy.get('.payment-method-info > .title > strong').contains(paymentSubtitle);
    }

    validatePaymentMethodValue(paymentMethodText, creditCardShippingMethod) {
        return cy.get('.info-list > .payment-method').contains(paymentMethodText + creditCardShippingMethod);
    }

    validateShippingAddressSubtitle(shippingAddressSubtitle) {
        return cy.get('.shipping-info > .title > strong').should('have.text', shippingAddressSubtitle);
    }

    validateShippingInfoName(firstName, lastName) {
        return cy.get('.shipping-info > .info-list > .name').contains(firstName + ' ' + lastName);
    }

    validateShippingInfoEmail(emailText, email) {
        return cy.get('.shipping-info > .info-list > .email').contains(emailText + email);
    }

    validateShippingInfoPhone(phoneText, phoneNumber) {
        return cy.get('.shipping-info > .info-list > .phone').contains(phoneText + phoneNumber);
    }

    validateShippingInfoFax(faxText) {
        return cy.get('.shipping-info > .info-list > .fax').contains(faxText);
    }

    validateShippingInfoCompanyName(companyName) {
        return cy.get('.shipping-info > .info-list > .company').contains(companyName);
    }

    validateShippingInfoAddress(address) {
        return cy.get('.shipping-info > .info-list > .address1').contains(address);
    }

    validateShippingInfoCityZipCode(city, zipPostalCode) {
        return cy.get('.shipping-info > .info-list > .city-state-zip').contains(city + ',' + zipPostalCode);
    }

    validateShippingInfoCountry(country) {
        return cy.get('.shipping-info > .info-list > .country').contains(country);
    }

    validateShippingMethodSubtitle(shippingSubtitle) {
        return cy.get('.shipping-method-info > .title').contains(shippingSubtitle);
    }

    validateShippingMethodValue(shippingMethodText, nextDayAirShippingMethodText) {
        return cy.get('.info-list > .shipping-method').contains(shippingMethodText + nextDayAirShippingMethodText);
    }

    selectConfirmButton() {
        return cy.get('#confirm-order-buttons-container > .button-1').click();
    }

    validateOrderCompletedTitle(orderCompletedText) {
        return cy.get('.section > .title > strong').should('have.text', orderCompletedText);
    }

    selectContinueButton() {
        return cy.get('.buttons > .button-1').click();
    }

    validateBillingAddressForm(billingAddressStepNumber, billingAddressStepTitle, firstName, lastName, companyName, email) {
        this.validateBillingAddressStepNumber(billingAddressStepNumber)
        this.validateBillingAddressStepTitle(billingAddressStepTitle)
        this.validateShipToSameAddressCheckbox()
        this.validateBillingAddressFirstName(firstName)
        this.validateBillingAddressLastName(lastName)
        this.validateBillingAddressCompanyName(companyName)
        this.validateBillingAddressEmail(email)
    }

    populateBillingAddressForm(country, city, address, zipPostalCode, phoneNumber) {
        this.selectCountry(country)
        this.enterCity(city)
        this.enterAddress(address)
        this.enterZipPostalCode(zipPostalCode)
        this.enterPhoneNumber(phoneNumber)
    }

    validateShippingAddressForm(shippingAddressStepNumber, shippingAddressStepTitle) {
        this.validateShippingAddressStepNumber(shippingAddressStepNumber)
        this.validateShippingAddressStepTitle(shippingAddressStepTitle)
    }

    validateShippingMethodForm(shippingMethodStepNumber, shippingMethodStepTitle, nextDayAirShippingMethod) {
        this.validateShippingMethodStepNumber(shippingMethodStepNumber)
        this.validateShippingMethodStepTitle(shippingMethodStepTitle)
        this.validateNextDayAirShippingMethodName(nextDayAirShippingMethod)
    }

    populateShippingMethodForm() {
        this.selectNextDayAirShippingMethodCheckbox()
        this.selectShippingMethodContinueButton()
    }

    validatePaymentMethodForm(paymentMethodStepNumber, paymentMethodStepTitle, creditCardShippingMethod) {
        this.validatePaymentMethodStepNumber(paymentMethodStepNumber)
        this.validatePaymentMethodStepTitle(paymentMethodStepTitle)
        this.validateCreditCardPaymentMethodName(creditCardShippingMethod)
    }

    populatePaymentMethodForm() {
        this.selectPaymentMethod()
        this.selectPaymentMethodContinueButton()
    }

    validatePaymentInfoForm(paymentInfoStepNumber, paymentInfoStepTitle, creditCardType) {
        this.validatePaymentInfoStepNumber(paymentInfoStepNumber)
        this.validatePaymentInfoStepTitle(paymentInfoStepTitle)
        this.validateCreditCardType(creditCardType)
    }

    populatePaymentInfoForm(cardHolderName, cardNumber, cardExpirationMonth, cardExpirationYear, cardCode) {
        this.enterCardHolderName(cardHolderName)
        this.enterCardNumber(cardNumber)
        this.selectCardExpirationMonth(cardExpirationMonth)
        this.selectCardExpirationYear(cardExpirationYear)
        this.enterCardCode(cardCode)
        this.selectPaymentInfoContinueButton()
    }

    validateConfirmOrderForm(confirmOrderStepNumber, confirmOrderStepTitle, billingAddressSubtitle, firstName, lastName, emailText, email, phoneText, phoneNumber, faxText, companyName, address, city, zipPostalCode, country, paymentSubtitle, paymentMethodText, creditCardShippingMethod, shippingAddressSubtitle, shippingSubtitle, shippingMethodText, nextDayAirShippingMethodText) {
        this.validateConfirmOrderStepNumber(confirmOrderStepNumber)
        this.validateConfirmOrderStepTitle(confirmOrderStepTitle)
        this.validateBillingAddressSubtitle(billingAddressSubtitle)
        this.validateBillingInfoName(firstName, lastName)
        this.validateBillingInfoEmail(emailText, email)
        this.validateBillingInfoPhone(phoneText, phoneNumber)
        this.validateBillingInfoFax(faxText)
        this.validateBillingInfoCompanyName(companyName)
        this.validateBillingInfoAddress(address)
        this.validateBillingInfoCityZipCode(city, zipPostalCode)
        this.validateBillingInfoCountry(country)
        this.validatePaymentMethodSubtitle(paymentSubtitle)
        this.validatePaymentMethodValue(paymentMethodText, creditCardShippingMethod)
        this.validateShippingAddressSubtitle(shippingAddressSubtitle)
        this.validateShippingInfoName(firstName, lastName)
        this.validateShippingInfoEmail(emailText, email)
        this.validateShippingInfoPhone(phoneText, phoneNumber)
        this.validateShippingInfoFax(faxText)
        this.validateShippingInfoCompanyName(companyName)
        this.validateShippingInfoAddress(address)
        this.validateShippingInfoCityZipCode(city, zipPostalCode)
        this.validateShippingInfoCountry(country)
        this.validateShippingMethodSubtitle(shippingSubtitle)
        this.validateShippingMethodValue(shippingMethodText, nextDayAirShippingMethodText)
    }

    confirmOrder(orderCompletedText) {
        this.selectConfirmButton()
        this.validateOrderCompletedTitle(orderCompletedText)
        this.selectContinueButton()
    }

}

export default CheckoutPage;