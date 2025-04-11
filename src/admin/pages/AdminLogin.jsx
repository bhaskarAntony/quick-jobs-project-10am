import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../../logic/adminLogic';

function AdminLogin() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        adminLogin(name, password);
        navigate('/admin');
    }
   
  return (
    <div className='container p-3 p-md-5'>
    <div className="row">
        <div className="col-md-5 m-auto">
            <div className="border shadow-sm p-3">
                <h5 className="fs-5">Admin Login</h5>
                <hr />
                <form onSubmit={submitHandler}>

                    
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text" placeholder='Enter your username' className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="text" placeholder='Enter your password' className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <button className="btn btn-dark px-5" type='submit'>Login</button>
                    <button className="btn btn-light border px-3" type='reset'>Cancel</button>
                </div>

                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default AdminLogin