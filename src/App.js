import './App.css';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Reservations from './Components/Reservations';
import Container from './Components/Container';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import { store } from './actions/store';
function App() {
  return (
    <HashRouter>
    <Provider store={store}>
    <ChakraProvider toastOptions={{defaultOptions: { position: 'top-right' }}}> 
      <Container>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/" element={<Navigate to={"/login"}/>}></Route>
          <Route path="/reservations" element={<Reservations/>}></Route>
        </Routes>
      </Container>
    </ChakraProvider>
    </Provider>
    </HashRouter>
  );
}

export default App;
