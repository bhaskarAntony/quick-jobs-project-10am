import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function AdminProtect() {
    let isAdmin = localStorage.getItem('admin') || false;
  return (
    <div>
        {
            isAdmin == "true"?<Outlet/>: <Navigate to="/admin/login"/>
        }
    </div>
  )
}

export default AdminProtect