import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import ProtectedRoute from './protected-route/protectedRoute'
import Pnf from './pages/pnf/Pnf'
import Register from './pages/register/Register'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-bootstrap'
import AdminDashbaord from './admin/pages/AdminDashbaord'
import Jobcreate from './admin/pages/Jobcreate'
import AdminLogin from './admin/pages/AdminLogin'
import AdminProtect from './protected-route/AdminProtect'

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
        <Header/>
        <Routes>
          <Route element={<ProtectedRoute/>}>
              <Route path='/' element={<Home/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

        <Route element={<AdminProtect/>}>
        <Route path='/admin' element={<AdminDashbaord/>}/> {/*this is the outlet */}
        </Route>
          <Route path='/create/job' element={<Jobcreate/>}/>
          <Route path='/admin/login' element={<AdminLogin/>}/>
          <Route path='/*' element={<Pnf/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App