describe('test_name', function() {

  it('what_it_does', function() {
 
     cy.viewport(1920, 933)
  
     cy.visit('https://testingqarvn.com.es/')
  
     cy.get('#top-menu > #menu-item-179 > .sub-menu > #menu-item-218 > a').should("not.be.visible").click({ force: true })

  
    // cy.visit('https://testingqarvn.com.es/datos-personales/')
  
  })
 
 })