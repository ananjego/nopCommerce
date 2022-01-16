class CustomerPage {

    getRandomNumber() {
        return Math.floor(1000000 * Math.random() + 1).toString();
    };

    getRandomEmail() {
        return this.getRandomNumber() + '@dispostable.com';
    }

    clickOnTheMyAccountLink() {
        return cy.get('.ico-account').click();
    }

    validateGender() {
        return cy.get('#gender-female').should('be.checked');
    }

    validateFirstName(firstName) {
        return cy.get('#FirstName').should('have.value', firstName);
    }

    validateLastName(lastName) {
        return cy.get('#LastName').should('have.value', lastName);
    }

    validateBirthDay(birthDay) {
        return cy.get('[name="DateOfBirthDay"]').find(':selected').should('have.value', birthDay);
    }

    validateBirthMonth(birthMonth) {
        return cy.get('[name="DateOfBirthMonth"]').find(':selected').contains(birthMonth);
    }

    validateBirthYear(birthYear) {
        return cy.get('[name="DateOfBirthYear"]').find(':selected').should('have.value', birthYear);
    }

    validateEmail(email) {
        return cy.get('#Email').should('have.value', email);
    }

    validateCompanyName(companyName) {
        return cy.get('#Company').should('have.value', companyName);
    }

    validateNewsletter() {
        return cy.get('#Newsletter').should('not.be.checked');
    }

    validateCustomerInfo(firstName, lastName, birthDay, birthMonth, birthYear, email, companyName) {
        this.validateGender()
        this.validateFirstName(firstName)
        this.validateLastName(lastName)
        this.validateBirthDay(birthDay)
        this.validateBirthMonth(birthMonth)
        this.validateBirthYear(birthYear)
        this.validateEmail(email)
        this.validateCompanyName(companyName)
        this.validateNewsletter()
    }

    logout() {
        return cy.get('.ico-logout').click();
    }

}

export default CustomerPage;
