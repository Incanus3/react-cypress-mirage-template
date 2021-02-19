import { createServer, Model, Response } from "miragejs"

export default function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    // seeds(server) {
    //   server.create("user", { name: "Alice", email: 'alice@test.cz', password: 'aaa' })
    //   server.create("user", { name: "Bob",   email: 'bob@test.cz',   password: 'bbb' })
    // },

    routes() {
      this.logging   = true
      this.urlPrefix = 'http://backend.example.com'
      this.namespace = "api"

      // this.get("/users", (schema) => {
      //   return schema.users.all()
      // })

      this.post('/login', (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody)

        const user    = schema.users.findBy({ email })
        const success = user?.attrs?.password === password

        return new Response(
          success ? 200 : 401, {}, { result: success ? 'success' : 'bad credentials' }
        )
      })

      this.passthrough('http://localhost:3000/**')
    },
  })

  return server
}
