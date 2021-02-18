import { Container } from 'react-bootstrap';
import './App.scss';
import Login from './Login';

export default function App() {
  return (
    <div className="App">
      <Container>
        <Login />
      </Container>
    </div>
  );
}
