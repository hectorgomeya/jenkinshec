//https://demoqa.com/text-box
require('cypress-xpath')

describe('visitar google', () => {
    it('passes', () => {
      cy.log('Prueba CYPRESS')
      cy.visit('https://testingqarvn.com.es/datos-personales/')
      cy.wait(3000)

      cy.get('#wsf-1-field-21').should("be.visible").type("prueba")
      cy.get("[name='field_22']").should("be.visible").type("prueba")
      cy.xpath("//*[@id='wsf-1-field-23']").type("prueba")

    })
  

  it('passes', () => {
    cy.log('Prueba CYPRESS')
    cy.visit('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
    cy.wait(3000)

    cy.get(".wsf-label").contains("JS").click()
  })
})