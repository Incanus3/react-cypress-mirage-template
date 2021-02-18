export default class LoginPage {
  visit() {
    cy.visit('/')
  }

  alert() {
    return cy.get('#login-alert')
  }

  logIn(email, password) {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#login-submit').click()
  }
}
