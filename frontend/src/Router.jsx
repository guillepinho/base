// Packages
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Pages
import LoginScreen from './pages/LoginScreen';
import CreateUser from './pages/CreateUser';
import NotFound from './pages/NotFound';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />

      <Route path="/create" element={<CreateUser />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
