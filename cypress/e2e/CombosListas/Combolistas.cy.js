//https://demoqa.com/text-box
import 'cypress-file-upload'

describe('visitar google', () => {
    it('passes', () => {
      cy.log('Prueba CYPRESS')
      cy.visit('https://testingqarvn.com.es/entrada-al-curso/')
      cy.wait(3000)

      cy.get('#wsf-1-field-138').select("Colorado")
    })

    it('passes', () => {
      cy.log('Prueba CYPRESS')
      cy.visit('https://demo.mobiscroll.com/select/multiple-select')
      cy.wait(3000)

      /* ==== Generated with Cypress Studio ==== */
      cy.get('#multiple-select-context > .mbsc-form-control-wrapper > .mbsc-textfield-inner > .mbsc-textfield-tags').click();
      // cy.get('#multiple-select-input').should("not.be.visible").click({ force: true })
      //cy.get('.mbsc-scrollview-scroll > [tabindex="0"]').click();
      //cy.get('.mbsc-scrollview-scroll > :nth-child(42)').click();
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get('.mbsc-scrollview-scroll > [tabindex="0"]').click();

      cy.get('.mbsc-scrollview-scroll > :nth-child(45)').click();
      cy.get('.mbsc-scrollview-scroll > :nth-child(46)').click();
      /* ==== End Cypress Studio ==== */
    })

    it.only('passes', () => {
      cy.log('Prueba CYPRESS')
      cy.visit('https://demo.anhtester.com/basic-select-dropdown-demo.html')
      cy.wait(3000)

      let paises = ["California","Texas"]

      /* ==== Generated with Cypress Studio ==== */
      cy.get('#multi-select').select(paises).then (
        () =>  
        {

          cy.get("#printAll").click()


        }

      )
    })
  })