



beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
});
/// <reference types="Cypress"/>
describe("this is a test", () => {
    it("is the test", () => {

        cy.visit("www.saucedemo.com");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        //cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        //cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        //11111111
        //cy.get("div#inventory_container").find(".btn").eq(0).click();
        var ex=3;
        for (let i = 0; i < 3; i++) {
            var array=cy.get("div#inventory_container").find(".btn").eq(i).click();
            
            
        }


    })




})
