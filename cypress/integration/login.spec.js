import LoginPage from './pages/login'

context('Admin login', () => {
  const page = new LoginPage()

  beforeEach(() => {
    page.visit()
  })

  context('with correct credentials', () => {
    it('succeeds', () => {
      page.logIn('test@test.cz', 'asdf')
      page.alert().should('be.visible')
    })
  })
})
