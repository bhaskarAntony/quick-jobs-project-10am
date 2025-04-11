import React, { useEffect, useState } from 'react'
import { getAllJobs } from '../../logic/adminLogic';

function AdminDashbaord() {
    const [allJobs, setAllJobs] = useState([]);

    useEffect(()=>{
        setAllJobs(getAllJobs());
    })
  return (
    <div className='container p-3 p-md-5'>
            <div className="d-flex gap-3 justify-content-between align-items-center">
            <h1 className='fs-5'>Admin dashabord</h1>
            <a href='/create/job' className="btn btn-dark">Create Job</a>
            </div>
            <hr />

            <table>
                <tr>
                    <th>SI.NO</th>
                    <th>JOB</th>
                    <th>Salary</th>
                    <th>Location</th>
                    <th>Experience</th>
                    <th>Actions</th>
                </tr>
                {
                    allJobs.length==0?(
                        <tr>
                            <td colSpan={6} className="text-center">
                                <h1 className="m-0 fs-1"><i className="bi bi-ban text-secondary"></i></h1>
                                <p className="m-0 fs-5">No jobs found</p>
                            </td>
                        </tr>
                    ):(
                        allJobs.map((item, index)=>(
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.jobName}</td>
                                <td>{item.salary}</td>
                                <td>{item.location}</td>
                                <td>{item.experience}</td>
                                <td className='d-flex gap-2'>
                                    <a href="/admin/view/job" className="btn btn-dark btn-sm"><i className="bi bi-eye"></i></a>
                                    <a href="/admin/edit/job" className="btn btn-dark btn-sm"><i className="bi bi-pencil"></i></a>
                                    <button className="btn btn-danger"><i className="bi bi-trash"></i></button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </table>
    </div>
  )
}

export default AdminDashbaord