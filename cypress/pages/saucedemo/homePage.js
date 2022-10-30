class homePage{
    elements =  {
        usernameInput: ()=> cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        eerorMessage: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username)
    }

    typePassword(password) {
        this.elements.passwordInput().type(password)
    }

    loginButtonClick() {
        this.elements.loginButton().click()
    }
}

module.exports = new homePage()