import React, { useState } from 'react'
import { loginhandler } from '../../logic/LogicStore';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        loginhandler(email, password);
        // window.location.reload();
        navigate('/')
    }
  return (
    <div className='container p-3 p-md-5'>
        <div className="row">
            <div className="col-md-5 m-auto">
                <div className="border shadow-sm p-3">
                    <h5 className="fs-5">Login</h5>
                    <hr />
                    <form onSubmit={submitHandler}>

                        
                    <div className="form-group mt-3">
                        <label htmlFor="" className="form-label">Email Address</label>
                        <input type="text" placeholder='Enter your email' className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="text" placeholder='Enter your password' className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <p className="m-0 mt-1">Don't have an account? <a href="/register" >Create account</a></p>
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

export default Login