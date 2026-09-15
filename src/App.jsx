import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Landing Page

import LandingPg from '../src/Components/LandingPage/LandingPg';
// Actual page content shown inside the layout's <Outlet/>
import Hero from '../src/Components/LandingPage/Hero';
import Notifications from '../src/Components/LandingPage/Notifications';
import Login from '../src/Components/LandingPage/Login';
import Register from './Components/LandingPage/Register';
import About from './Components/LandingPage/About';

// Dashboard Page
import DashboardPg from './Components/Dashboard/DashboardPg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPg />}>
          <Route index element={<Hero />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path='about' element={<About/>}></Route>
          <Route path='register' element={<Register/>}></Route>
        </Route>

        <Route path="/login" element={<Login />} /> 


        <Route path='/dashboard' element={<DashboardPg/>}>
          <Route path=''></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
