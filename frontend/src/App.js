import logo from './logo.svg';
import './App.css';
import Register from './component/forms/register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/forms/login';
import Reset from './component/forms/reset';
import DashboardUser from './page/dashboardUser';
import DashboardAdmin from './page/dashboardAdmin';
import Notfound from './page/notFound';
import ProtectedRoute from './routes/ProtectedRoute';
import CreateFilm from './component/forms/createFilm';
import CreateCategory from './component/forms/createCategory';
import Test from './page/test';

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route index path='/' element={<Test />} />
        {/* <Route index path='/' element={<Login />} />: */}
        <Route  path='/register' element={<Register />}  />
        <Route path="/reset" element={<Reset />} />
        {/* <Route path='/creatFilm' element={ <CreateFilm /> } /> */}
        <Route path='/createCategory' element={ <CreateCategory />} />

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

  );
}

export default App;

