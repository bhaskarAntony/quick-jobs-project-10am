import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    let isLogin = localStorage.getItem('isLogin') || false;
    console.log(isLogin);
    
  return (
    <div>
        {
            isLogin=="true"?<Outlet/>:<Navigate to="/login"/>
        }
    </div>
  )
}

export default ProtectedRoute