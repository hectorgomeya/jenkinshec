//https://demoqa.com/text-box
import 'cypress-file-upload'

describe('visitar google', () => {
 


    it.only('passes', () => {
      cy.log('Prueba CYPRESS')
      cy.visit('https://demo.anhtester.com/jquery-dual-list-box-demo.html')
      cy.wait(3000)

      let paises = ["Isis","Alice"]

      /* ==== Generated with Cypress Studio ==== */

      cy.get(":nth-child(1) > .form-control").select(paises).then(

        () => {

cy.get(".pAdd").click()

        }




      )


      
    })
  })