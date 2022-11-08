import homeSaucePage from '../../pages/saucedemo/homePage.js';
import inventoryPage from '../../pages/saucedemo/inventoryPage.js';

describe("POM Sauce Page tests implementation", ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com');
    });

    it('should login corectly', function(){
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.loginButtonClick();
    
        inventoryPage.elements.titleSpan().should('have.text','Products')
    
    })

    it('should locked out user not login', function(){
        homeSaucePage.typeUsername('locked_out_user');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.loginButtonClick();
    
        homeSaucePage.elements.eerorMessage().should('contain',"Epic sadface: Sorry, this user has been locked out.")
    
    })

    it('should display message for incorect username', function(){
        homeSaucePage.typeUsername('notexist');
        homeSaucePage.typePassword('secret_sauce');
        homeSaucePage.loginButtonClick();
    
        homeSaucePage.elements.eerorMessage().should('contain',"Epic sadface: Username and password do not match any user in this service")
    
    })

    it('should display message for incorect password', function(){
        homeSaucePage.typeUsername('standard_user');
        homeSaucePage.typePassword('fake');
        homeSaucePage.loginButtonClick();
    
        homeSaucePage.elements.eerorMessage().should('contain',"%%Epic sadface: Username and password do not match any user in this service")
    
    })
})