import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Reservations from './Components/Reservations';
import Container from './Components/Container';
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/reservations" element={<Reservations/>}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
