class RegisterPage {

    getRegisterButton() {
        return cy.get('#register-button');
    }

    validateFirstNameRequiredAsterisk() {
        return cy.get(':nth-child(1) > .form-fields > :nth-child(2) > .required').should('be.visible');
    }

    validateFirstNameRequiredError(firstNameError) {
        return cy.get('#FirstName-error').should('have.text', firstNameError);
    }

    validateLastNameRequiredAsterisk() {
        return cy.get(':nth-child(3) > .required').should('be.visible');
    }

    validateLastNameRequiredError(lastNameError) {
        return cy.get('#LastName-error').should('have.text', lastNameError);
    }

    validateEmailRequiredAsterisk() {
        return cy.get(':nth-child(5) > .required').should('be.visible');
    }

    validateEmailRequiredError(emailError) {
        return cy.get('#Email-error').should('have.text', emailError);
    }

    validatePasswordRequiredAsterisk() {
        return cy.get(':nth-child(1) > .required').should('be.visible');
    }

    validatePasswordRequiredError(passwordError) {
        return cy.get('#Password-error').should('have.text', passwordError);
    }

    validateConfirmPasswordRequiredAsterisk() {
        return cy.get(':nth-child(4) > .form-fields > :nth-child(2) > .required').should('be.visible');
    }

    validateConfirmPasswordRequiredError(confirmPasswordError) {
        return cy.get('#ConfirmPassword-error').should('have.text', confirmPasswordError);
    }


    selectGender() {
        return cy.get('#gender-female').click();
    }

    enterFirstName(firstName) {
        return cy.get('#FirstName').type(firstName);
    }

    enterLastName(lastName) {
        return cy.get('#LastName').type(lastName);
    }

    selectBirthDay(birthDay) {
        return cy.get('[name="DateOfBirthDay"]').select(birthDay);
    }

    selectBirthMonth(birthMonth) {
        return cy.get('[name="DateOfBirthMonth"]').select(birthMonth);
    }

    selectBirthYear(birthYear) {
        return cy.get('[name="DateOfBirthYear"]').select(birthYear);
    }

    enterEmailAddress(emailAddress) {
        return cy.get('#Email').type(emailAddress);
    }

    enterCompanyName(companyName) {
        return cy.get('#Company').type(companyName);
    }

    unselectNewslwtter() {
        return cy.get('#Newsletter').click();
    }

    enterPassword(password) {
        return cy.get('#Password').type(password);
    }

    confirmPassword(password) {
        return cy.get('#ConfirmPassword').type(password);
    }

    clickOnTheRegisterButton() {
        return cy.get('.ico-register').click();
    }

    validateRegisterPageHeader() {
        return cy.get('h1').should('have.text', 'Register');
    }

    validateRegisterFormRequiredFields(firstNameError, lastNameError, emailError, passwordError, confirmPasswordError) {
        this.validateFirstNameRequiredAsterisk()
        this.validateFirstNameRequiredError(firstNameError)
        this.validateLastNameRequiredAsterisk()
        this.validateLastNameRequiredError(lastNameError)
        this.validateEmailRequiredAsterisk()
        this.validateEmailRequiredError(emailError)
        this.validatePasswordRequiredAsterisk()
        this.validatePasswordRequiredError(passwordError)
        this.validateConfirmPasswordRequiredAsterisk()
        this.validateConfirmPasswordRequiredError(confirmPasswordError)
    }

    populateRegisterForm(firstName, lastName, birthDay, birthMonth, birthYear, emailAddress, companyName, password) {
        this.selectGender()
        this.enterFirstName(firstName)
        this.enterLastName(lastName)
        this.selectBirthDay(birthDay)
        this.selectBirthMonth(birthMonth)
        this.selectBirthYear(birthYear)
        this.enterEmailAddress(emailAddress)
        this.enterCompanyName(companyName)
        this.unselectNewslwtter()
        this.enterPassword(password)
        this.confirmPassword(password)
    }

    validateRegistrationSucessMsg(registrationSucessMsg) {
        return cy.get('.result').should('have.text', registrationSucessMsg);
    }

}

export default RegisterPage;


