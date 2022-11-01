import homeSaucePage from '../../pages/saucedemo/homePage.js';
import inventoryPage from '../../pages/saucedemo/inventoryPage.js';

import tests from '../../fixtures/saucedemo/pom-data-driven/sauceUsers'

describe("POM Sauce Page tests implementation with fixture", ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com');
    });

    tests.forEach(test => {
        it(test.itName, () => {
            homeSaucePage.typeUsername(test.username),
            homeSaucePage.typePassword(test.password);
            homeSaucePage.loginButtonClick();

            if(test.itName === "should login corectly to inventory page"){
                inventoryPage.elements.titleSpan().should('have.text', test.expected)
            }
            else{
                homeSaucePage.elements.eerorMessage().should('have.text', test.expected)
            }

        });
    });

    

})