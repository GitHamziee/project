import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Register from './Auth/Register';
import Login from './Auth/Login';
import { useAuth } from './contexts/AuthContext';
import Homepage from './pages/Homepage/Homepage';
import DashboardRoute from './pages/dashboard/DashboardRoutes'
import Error404 from './pages/Error/Error404';
import Navbar from './layout/navbar';
import About from './pages/About/About';
const MainRoutes = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
    
      <Routes>
        <Route path='/' element={(<Navbar/>)}>
          <Route index element={<Homepage/>}>
          </Route>
          <Route path='/About' element={<About/>}></Route>
        <Route path='/404' element={(<Error404/>)}></Route>
        <Route
          path="/register"
          element={
            !isAuthenticated ? <Register /> : <Navigate to="/dashboard" />
          }
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard/*"
          element={isAuthenticated?<DashboardRoute></DashboardRoute>: <Navigate to="/" />}
        >
        </Route>
        </Route>

      </Routes>

      
    </Router>

        
  );
};

export default MainRoutes;
