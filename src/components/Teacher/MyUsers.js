import React from 'react'
import { Link } from "react-router-dom";
import TeacherSidebar from './TeacherSidebar';


function TeacherRecCourses() {
  return (
    <div className="container mt-4">
    <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar/>
        </aside>
        <section className="col-md-9">
             

           <div className="card">
                <h5 className="card-header">User list</h5>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Enrolled course</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>php</td>
                            <td><Link to='#'>php</Link></td>
                            <td><button className="btn btn-danger btn-sm active">delete</button></td>
                        </tbody>
                    </table>
                </div> 
                </div>
          
         
            
        </section>
        
    </div>

</div>
  )
}

export default TeacherRecCourses
