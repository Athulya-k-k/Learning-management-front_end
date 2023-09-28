import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function FavCourses(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                     

                   <div className="card">
                        <h5 className="card-header">favourite courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created by</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>php</td>
                                    <td><Link to='#'>athulya</Link></td>
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
export default FavCourses;