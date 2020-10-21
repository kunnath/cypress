describe('My First Cypress Test', function() {
  it('Visits https://elinvar.de/', function() {
   
 //Visit the https://elinvar.de/
  cy.visit("/");
  cy.get(':nth-child(4) > ._brlbs-btn').click()
  cy.get('#menu-item-3431 > a > .avia-menu-text')
  .contains('Ihre Plattform');
  cy.get('#menu-item-3431 > a > .avia-menu-text')
  .contains('Ihre Plattform')
  
})
})