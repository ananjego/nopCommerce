/// <reference types="Cypress" />
import RegisterPage from '../../support/pageObjects/RegisterPage';
import ElectronicsPage from '../../support/pageObjects/ElectronicsPage';
import CartPage from '../../support/pageObjects/CartPage';
import CheckoutPage from '../../support/pageObjects/CheckoutPage';
import CustomerPage from '../../support/pageObjects/CustomerPage';

describe('nopCommerce Purchase flow', function () {

  let testData;
  let randomEmail = '';
  const customerPage = new CustomerPage;
  randomEmail = customerPage.getRandomEmail();

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('.Nop.Authentication');
  });

  before(() => {
    cy.fixture('example').then(function (data) {
      testData = data;
    })
  });

  it('Register customer', function () {
    const registerPage = new RegisterPage;

    cy.visit(testData.url);
    cy.get('.header-logo > a > img').should('be.visible');

    registerPage.clickOnTheRegisterButton();
    registerPage.validateRegisterPageHeader();

    //Register page required fields validation
    registerPage.getRegisterButton().click();

    registerPage.validateRegisterFormRequiredFields(
      testData.firstNameError,
      testData.lastNameError,
      testData.emailError,
      testData.passwordError,
      testData.confirmPasswordError
    );

    //Register customer
    registerPage.populateRegisterForm(
      testData.firstName,
      testData.lastName,
      testData.birthDay,
      testData.birthMonth,
      testData.birthYear,
      randomEmail,
      testData.companyName,
      testData.password,
      testData.password
    )

    registerPage.getRegisterButton().click();

    registerPage.validateRegistrationSucessMsg(testData.registrationSucessMsg);


    //Account - Customer Info Validation
    customerPage.clickOnTheMyAccountLink();

    customerPage.validateCustomerInfo(
      testData.firstName,
      testData.lastName,
      testData.birthDay,
      testData.birthMonth,
      testData.birthYear,
      randomEmail,
      testData.companyName
    );

  });

  it('Add to cart and proceed with checkout', function () {
    const electronicsPage = new ElectronicsPage;
    const cartPage = new CartPage;
    const checkoutPage = new CheckoutPage;

    //Electronics page
    electronicsPage.validateElectronicsPage(testData.electronicsPageTitle);
    electronicsPage.validateCellPhonePage(
      testData.cellPhonesPageTitle,
      testData.htcOneMiniCellPhone,
      testData.htcOneMiniCellPhonePrice
    );

    electronicsPage.addToCart(testData.addToShoppingCartSuccessMsg);

    //Shopping Cart validation
    electronicsPage.getPageTitle().should('have.text', testData.shoppingCartPageTitle);

    cartPage.validateShoppingCart(
      testData.htcOneMiniCellPhone,
      testData.htcOneMiniCellPhonePrice,
      testData.productQuantity,
      testData.productTotalPrice,
      testData.orderSubtotalPrice,
      testData.shippingCost,
      testData.taxValue,
      testData.orderTotalPrice
    );

    cartPage.getTermsOfService().click();
    cartPage.getCheckoutButton().click();

    // Checkout Page
    checkoutPage.getCheckoutPageTitle().should('have.text', testData.checkoutPageTitle);

    //Billing Address Step
    checkoutPage.validateBillingAddressForm(
      testData.billingAddressStepNumber,
      testData.billingAddressStepTitle,
      testData.firstName,
      testData.lastName,
      testData.companyName,
      randomEmail
    );

    checkoutPage.populateBillingAddressForm(
      testData.country,
      testData.city,
      testData.address,
      testData.zipPostalCode,
      testData.phoneNumber
    );

    checkoutPage.getAddressContinueButton().click();

    //Shipping Address Step
    checkoutPage.validateShippingAddressForm(
      testData.shippingAddressStepNumber,
      testData.shippingAddressStepTitle
    );

    //Shipping Method Step
    checkoutPage.validateShippingMethodForm(
      testData.shippingMethodStepNumber,
      testData.shippingMethodStepTitle,
      testData.nextDayAirShippingMethod
    );

    checkoutPage.populateShippingMethodForm();

    //Payment Method Step
    checkoutPage.validatePaymentMethodForm(
      testData.paymentMethodStepNumber,
      testData.paymentMethodStepTitle,
      testData.creditCardShippingMethod
    );

    checkoutPage.populatePaymentMethodForm();

    //Payment Information Step
    checkoutPage.validatePaymentInfoForm(
      testData.paymentInfoStepNumber,
      testData.paymentInfoStepTitle,
      testData.creditCardType
    );

    checkoutPage.populatePaymentInfoForm(
      testData.cardHolderName,
      testData.cardNumber,
      testData.cardExpirationMonth,
      testData.cardExpirationYear,
      testData.cardCode
    );

    //Confirm Order Step
    checkoutPage.validateConfirmOrderForm(
      testData.confirmOrderStepNumber,
      testData.confirmOrderStepTitle,
      testData.billingAddressSubtitle,
      testData.firstName,
      testData.lastName,
      testData.emailText,
      randomEmail,
      testData.phoneText,
      testData.phoneNumber,
      testData.faxText,
      testData.companyName,
      testData.address,
      testData.city,
      testData.zipPostalCode,
      testData.country,
      testData.paymentSubtitle,
      testData.paymentMethodText,
      testData.creditCardShippingMethod,
      testData.shippingAddressSubtitle,
      testData.shippingSubtitle,
      testData.shippingMethodText,
      testData.nextDayAirShippingMethodText
    );

    checkoutPage.confirmOrder(testData.orderCompletedText);

  });

  it('Log out', function () {

    customerPage.logout();
    cy.clearCookies();

  });

});