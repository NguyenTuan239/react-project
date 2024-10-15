// src/App.js
import React, { useEffect } from 'react';
import { SettingProvider } from './contexts/SettingContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Setting from './components/Setting/Setting';
import Loader from './components/Setting/Loadder';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <SettingProvider>
      <Loader />
      <Setting />
      <Header />
      <Outlet />
      <Footer />
    </SettingProvider>
  );
}

export default App;
