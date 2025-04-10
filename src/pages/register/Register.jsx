import React, { useState } from 'react'
import { register } from '../../logic/LogicStore';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate(); //to navigate from one page another one
    const submitHanlder = (e) =>{
        e.preventDefault()
        register(name, email, phone, password);
        navigate('/login')
    }
  return (
    <div className='container p-3 p-md-5'>
    <div className="row">
        <div className="col-md-6 m-auto">
            <div className="border shadow-sm p-3">
                <h5 className="fs-5">Create account</h5>
                <hr />
                <form onSubmit={submitHanlder}>

                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text" placeholder='Enter your name' className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Email Address</label>
                    <input type="text" placeholder='Enter your email' className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Phone number</label>
                    <input type="text" placeholder='Enter your number' className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                </div>


                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="text" placeholder='Enter your password' className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <p className="m-0 mt-1">Do have an already account? <a href="/login" >Login</a></p>
                <div className="d-flex gap-3 mt-3">
                    <button className="btn btn-dark px-5" type='submit'>Create account</button>
                    <button className="btn btn-light border px-3" type='reset'>Cancel</button>
                </div>

                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Register