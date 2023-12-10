import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx'
import RequiredAuth from '../components/RequiredAuth.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import AppLayout from '../layouts/AppLayout.jsx'
import './App.css'

function App() {


  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>

        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />

        {/* Private routes */}
        <Route element={<RequiredAuth />}>
          <Route element={<AppLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
        </Route>

      </Route>
    </Routes>
  )
}

export default App
