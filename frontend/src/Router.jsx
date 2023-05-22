// Packages
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import LoginScreen from './pages/Login/LoginScreen';
import CreateUser from './pages/CreateUser/CreateUser';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />

      <Route path="/create" element={<CreateUser />} />
    </Routes>
  );
}

export default Router;
