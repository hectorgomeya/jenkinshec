//https://demoqa.com/text-box
import 'cypress-file-upload'
require('cypress-xpath')
describe('Pruebas con asserts', () => {
 


    it('Contains', () => {
      cy.log('Prueba CYPRESS')
      cy.visit('http://automationpractice.com/index.php')
    cy.get('.sf-menu').contains('Women').click()

      /* ==== Generated with Cypress Studio ==== */

    

      
    })


    
    it('EQ', () => {
        cy.log('Prueba CYPRESS')
        cy.visit('http://automationpractice.com/index.php')
      cy.get('.product-container').find(".product-image-container").eq(2).click()
  
        /* ==== Generated with Cypress Studio ==== */
  
      
  
        
      })
      
    
      it('texto', () => {
        cy.log('Prueba CYPRESS')
        cy.visit('http://automationpractice.com/index.php')
      cy.get('.product-container').find(".product-image-container").eq(3).click()
      cy.get('#product_condition .editable').then((cond) => {
        cy.log (cond.text())

        if (cond.text() == 'New')

        {

            cy.log('Nuevo')
        }

      }


      )

      cy.get('#our_price_display').then((p) => {

       cy.log(p.text())

       let precio = p.text()
       precio=precio.slice(1,3)
       cy.log(precio)


       if (precio > 30)

       { cy.log ("añadir")
       cy.get("#add_to_cart").click()

      }


       else {
        cy.log ("quitar")
        cy.xpath("//*[@id='columns']/div[1]/a[2]").click()
       }


      })

  
        /* ==== Generated with Cypress Studio ==== */
  
      
  
        
      })
    
      it('have contains', () => {
        cy.log('Prueba CYPRESS')
        cy.visit('http://computer-database.gatling.io/computers')

        /* ==== Generated with Cypress Studio ==== */




        /* ==== Generated with Cypress Studio ==== */
        cy.get('#add').click();
        cy.get('#name').clear();
        cy.get('#name').type('TEST_QA');
        cy.get('#introduced').clear();
        cy.get('#introduced').type('2022-08-25');
        cy.get('#company').select('13');
        cy.get('.primary').click();
        /* ==== End Cypress Studio ==== */

        cy.get (".alert-message").contains("TEST_QA")
      })
      it.only('have contains', () => {
        cy.log('Prueba CYPRESS')
        cy.visit('https://demo.anhtester.com/basic-first-form-demo.html')

        /* ==== Generated with Cypress Studio ==== */

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#at-cv-lightbox-close').should("be.visible").click({force : true});
        cy.get('.form-group > #user-message').clear();
        cy.get('.form-group > #user-message').type('test');
        //cy.get('#get-input > .btn').click();
        cy.contains("[type='button']", "Show Message").click()
        /* ==== End Cypress Studio ==== */
      })
    
    
    })