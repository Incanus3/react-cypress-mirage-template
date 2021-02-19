import makeServer from "../../src/server"
import LoginPage  from './pages/login'

context('Admin login', () => {
  const page = new LoginPage()

  let server

  beforeEach(() => {
    server = makeServer({ environment: "test" })

    server.create("user", { name: "Alice", email: 'alice@test.cz', password: 'aaa' })

    page.visit()
  })

  afterEach(() => {
    server.shutdown()
  })

  context('with correct credentials', () => {
    it('succeeds', () => {
      page.logIn('alice@test.cz', 'aaa')

      page.alert().should('be.visible').should('have.class', 'alert-success').should('contain.text', 'logged in')
    })
  })

  context('with bad password', () => {
    it('succeeds', () => {
      page.logIn('alice@test.cz', 'bbb')

      page.alert().should('be.visible').should('have.class', 'alert-danger').should('contain.text', 'failed')
    })
  })
})
