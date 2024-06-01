import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from './contexts/AuthContext.jsx';
import Navbar from './layout/navbar.jsx';
import MainRoutes from './MainRoutes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <MainRoutes></MainRoutes>
    </AuthProvider>
  </React.StrictMode>,
);
