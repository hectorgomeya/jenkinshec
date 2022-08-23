//https://demoqa.com/text-box
import 'cypress-file-upload'

describe('visitar google', () => {
    it('passes', () => {
      cy.log('Prueba CYPRESS')
      cy.visit('https://testingqarvn.com.es/upload-files/')
      cy.wait(3000)
      /* ==== Generated with Cypress Studio ==== */
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      /* ==== End Cypress Studio ==== */
      let arcivo = 'eje1.png'

      cy.get('#wsf-1-field-94').attachFile(arcivo)
    })
  })