//https://demoqa.com/text-box

describe('visitar google', () => {
    it('passes', () => {
      cy.log('Prueba CYPRESS')
      cy.visit('https://testingqarvn.com.es/datos-personales/')
      cy.wait(3000)



      /* ==== Generated with Cypress Studio ==== */
      cy.get('#wsf-1-field-21').clear();
      cy.get('#wsf-1-field-21').type('Hector');
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#wsf-1-field-22').clear();
      cy.get('#wsf-1-field-22').type('Gomez');
      cy.get('#wsf-1-label-23').click();
      cy.get('#wsf-1-field-23').clear();
      cy.get('#wsf-1-field-23').type('a2as@as.es');
      cy.get('#wsf-1-field-24').clear();
      cy.get('#wsf-1-field-24').type('123');
      cy.get('#wsf-1-field-28').click();
      cy.get('#wsf-1-field-27').click();
      /* ==== End Cypress Studio ==== */
    })
  })