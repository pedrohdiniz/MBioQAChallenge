class ContactDetails {

    //Method to fill all information. All informations can be found at cypress.env.json
    fillInfortation(){
        cy.get('div[data-test-id="rfq-contact__first-name"] input').type(Cypress.env('FIRST_NAME'));
        cy.get('div[data-test-id="rfq-contact__last-name"] input').type(Cypress.env('LAST_NAME'));
        cy.get('input[inputmode="email"]').type(Cypress.env('EMAIL'));
        cy.get('input[inputmode="tel"]').type(Cypress.env('PHONE'));
        cy.get('div[data-test-id="rfq-contact__postal-code"] input').type(Cypress.env('POSTAL_CODE'));
        cy.get('wb-icon[name="checkmark-xs"]').eq(0).click();
    }

    clickOnProceed(){
        cy.get('button[data-test-id="dcp-rfq-contact-button-container__button-next"]').click();
    }

    //Validate all errors. Email, Phone and General. 
    errorValidations() {
        cy.get('[data-test-id="rfq-contact__email"] > wb-input-control.hydrated > wb-control-error.hydrated')
          .scrollIntoView()
          .should('be.visible')
          .should('have.text', Cypress.env('EMAIL_ERROR'));
      
        cy.get('[data-test-id="rfq-contact__phone"] > wb-input-control.hydrated > wb-control-error.hydrated')
          .scrollIntoView()
          .should('be.visible')
          .should('have.text', Cypress.env('PHONE_ERROR'));
        
        cy.get('.dcp-error-message').scrollIntoView().should('be.visible')
          
      }
      
    
    
}
export default ContactDetails;