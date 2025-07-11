import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSingup from './pages/UserSingup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSingup from './pages/CaptainSingup'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSingup />} />
        <Route path='/captaion-login' element={<CaptainLogin />} />
        <Route path='/captaion-signup' element={<CaptainSingup />} />
      </Routes>
    </div>
  )
}

export default App
