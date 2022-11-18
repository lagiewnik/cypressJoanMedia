import {  Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import homeSaucePage from '../../../pages/saucedemo/homePage';
import inventoryPage from '../../../pages/saucedemo/inventoryPage';

Given('User open the login page', () =>{
    cy.visit('https://www.saucedemo.com/')
});

When('User enter the username {string}', (username)=>{
    homeSaucePage.typeUsername(username);
})

When('User provides incorrect credencials', (table)=>{
    table.hashes().forEach(element => {
        homeSaucePage.typeUsername(element.username);
        homeSaucePage.typePassword(element.password);
    });
})

When('User enter the password {string}', (password)=> {
    homeSaucePage.typePassword(password);
})

When('User clicks on the login button', () => {
    homeSaucePage.loginButtonClick();
})

Then("User will be logged in", ()=>{
    cy.log("")
    inventoryPage.elements.titleSpan().should('have.text','Products')
})

Then("User will be receiving {string} message", (errorMessage)=>{
    homeSaucePage.elements.eerorMessage().should('contain',errorMessage)
})