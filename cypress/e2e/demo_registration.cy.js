describe('registration Test', () => {
    it('registration', () => {
      cy.visit('https://demo.wpeverest.com/user-registration/simple-registration-form/');
      cy.wait(5000);
      cy.get('input[id="first_name"]').type('Md');
      cy.get('input[id="last_name"]').type('Nuruddin');
      cy.get('input[id="user_login"]').type('rony');
      cy.get('input[id="user_email"]').type('sqatest1@ba-systems.com');
      cy.get('span>input[id="user_pass"]').type('rony');
      cy.wait(5000);
     // cy.get('#user_confirm_password').scrollIntoView().type('rony');
      cy.get('span>input[id="user_confirm_password"]').click().contains('rony')
   

  })
})