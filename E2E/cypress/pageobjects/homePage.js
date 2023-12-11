class HomePage {

    //Method to access Mercedes-Benz Shop used cars in Australian market
    accessHomePage () {
        cy.visit(Cypress.env('URL'));
    }

    acceptCookies(){
        cy.get('cmm-cookie-banner[settings-id="Kvbnw4-6_"][variant="B"]')
        .shadow()
        .find('div > div > div > cmm-buttons-wrapper > div > div > wb7-button:nth-child(2)')
        .click({ position: 'top' });

    }
    
    //Method to Select State, insert postal code and select private purpose. State and Postal code can be found at cypress.env.json
    enterInformation () {
        cy.get('div[role="dialog"] select').select(Cypress.env('STATE'));
        cy.get('input[type="number"]').type(Cypress.env('POSTAL_CODE'));
        cy.get('div.wb-radio-control__indicator').eq(0).click();
        cy.contains('span', 'Continue').click();
    }

    //Method to click at Filter blue Button
    clickFilterButton () {
        cy.get('.filter-toggle').click({force: true});
    }

    //Method to validate if Popup was opened correctly 
    verifyIfPopUpWasOpen () {
        cy.get('.dcp-cars-filter-widget').should("be.visible");
    }
}
export default HomePage;
