import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function TeacherCourses(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar/>
                </aside>
                <section className="col-md-9">
                     

                   <div className="card">
                        <h5 className="card-header">my courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Total enrolled</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>php</td>
                                    <td><Link to='#'>22</Link></td>
                                    <td><button className="btn btn-danger btn-sm active">delete</button>
                                    <Link className="btn btn-success btn-sm active ms-2" to="/addchapter/2">Add chapter</Link>
                                    </td>
                                </tbody>
                            </table>
                        </div> 
                        </div>
                  
                 
                    
                </section>
                
            </div>

        </div>
       
    )

}
export default TeacherCourses;