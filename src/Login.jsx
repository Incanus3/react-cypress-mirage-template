import { useState            } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { request             } from 'src/utils/fetch'

const backendUrl = 'http://backend.example.com'

export default function Login() {
  const [email,          setEmail         ] = useState('')
  const [password,       setPassword      ] = useState('')
  const [remember,       setRemember      ] = useState(false)
  const [loginSucceeded, setLoginSucceeded] = useState(null)

  const submit = async () => {
    const data     = { email, password, remember }
    const response = await request('POST', `${backendUrl}/api/login`, { data })

    setLoginSucceeded(response.ok)
  }

  let alert

  if (loginSucceeded === true) {
    alert = <Alert variant="success" id="login-alert">You are logged in</Alert>
  } else if (loginSucceeded === false) {
    alert = <Alert variant="danger" id="login-alert">Login failed</Alert>
  }

  const form = (
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="remember-me">
        <Form.Check type="checkbox" label="Remember me"
          checked={remember} onChange={() => setRemember(!remember)}
        />
      </Form.Group>
      <Button variant="primary" id="login-submit" onClick={submit}>
        Submit
      </Button>
    </Form>
  )

  return (
    <>
      {alert}
      {form}
    </>
  )
}
