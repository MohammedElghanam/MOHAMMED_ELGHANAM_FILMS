import logo from './logo.svg';
import './App.css';
import Register from './components/forms/register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/forms/login';
import Nav from './components/layouts/nav';
import Reset from './components/forms/reset';
import Client from './pages/client';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>

        <Route  index element={<Register />}  />
        <Route path='login' element={<Login />} />
        {/* <Route path="reset" element={<Reset />} /> */}
        <Route path="/reset" element={<Reset />} />
        <Route path="/client" element={<Client />} />

      </Routes>
    </BrowserRouter>

    // <div >
    //   
    // </div>
  );
}

export default App;
