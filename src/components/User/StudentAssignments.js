import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";

function StudentAssignments(){
    const [AssignmentData, setAssignmentsData] = useState([]);
    const studentId = localStorage.getItem("studentId");

    useEffect(() => {
        try {
          axios
            .get(baseUrl + "/my-assignments/"+studentId )
            .then((res) => {
                setAssignmentsData(res.data);
            });
        } catch (error) {
          console.log(error);
        }
      }, []);
      console.log(AssignmentData);

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                     

                   <div className="card">
                        <h5 className="card-header">my assignmentss</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Detail</th>
                                        <th>Teacher</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                {AssignmentData.map((row, index) => 
                                    <tr>
                                    <td>  {row.title}</td>
                                    <td> {row.detail}</td>
                                    <td><Link to={`/teacherdetail/${row.teacher.id}/`}>{row.teacher.fullname}</Link></td>

                                   
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div> 
                        </div>
                  
                 
                    
                </section>
                
            </div>

        </div>
       
    )

}
export default StudentAssignments;