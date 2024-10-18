import logo from './logo.svg';
import './App.css';
import Register from './component/forms/register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/forms/login';
import Nav from './components/layouts/nav';
import Reset from './component/forms/reset';
import DashboardUser from './page/dashboardUser';
import DashboardAdmin from './page/dashboardAdmin';
import Notfound from './page/notFound';
import ProtectedRoute from './routes/ProtectedRoute';
import Test from './pages/test';

function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>

        <Route index path='/' element={<Login />} />
        <Route  path='/register' element={<Register />}  />
        <Route path="/reset" element={<Reset />} />
        {/* <Route path="/client" element={<Client />} /> */}
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        {/* <Route path='/notfound' element={<Notfound />} /> */}

        <Route 
            path="/protectedroute" 
            element={
              <ProtectedRoute>
                <DashboardAdmin />
                <DashboardUser />
              </ProtectedRoute>
            } 
        />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>

    // <Test />
  );
}

export default App;

