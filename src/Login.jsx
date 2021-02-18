import { useState            } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

export default function Login() {
  const [email,    setEmail   ] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const submit = () => {
    console.log('submitting', { email, password, remember })
    setLoggedIn(true)
  }

  const alert = (
    <Alert variant="success" id="login-alert">You are logged in</Alert>
  )

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
      {loggedIn && alert}
      {form}
    </>
  )
}
