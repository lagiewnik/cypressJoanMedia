/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Execute login process
       * @example
       * cy.typeLogin(usr, pswd)
       */
       typeLogin(usr: string, pswd: string): Chainable<any>

       /**
       * Execute logout process
       * @example
       * cy.logout( )
       */
        logout(): Chainable<any>
    }
  }