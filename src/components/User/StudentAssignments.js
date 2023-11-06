import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:8000/api";

function StudentAssignments(){
    const [AssignmentData, setAssignmentsData] = useState([]);
    const [AssignmentStatus, setAssignmentStatus] = useState('')
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
   

const markAsDone = (assignment_id,title,detail,student,teacher) => {
       
        const formData = new FormData();
       
        formData.append('student_status',true)
        formData.append('title',title)
        formData.append('detail',detail)
        formData.append('student',student)
        formData.append('teacher',teacher)
    
      try{
        axios.put(baseUrl+'/update-assignment/'+assignment_id,formData,{
          headers:{
            'Content-Type':'multipart/form-data'
          }

        })
      }catch(error){
        console.log(error);
      }
    }

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
                                        <th>Action</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                {AssignmentData.map((row, index) => 
                                    <tr>
                                    <td>  {row.title}</td>
                                    <td> {row.detail}</td>
                                    <td><Link to={`/teacherdetail/`+row.teacher.id}>{row.teacher.fullname}</Link></td>
                                    <td>
                                        {row.student_status==false &&
                                         <button onClick={()=>markAsDone(row.id,row.title,row.detail,row.student.id,row.teacher.id)}className="btn btn-success btn-sm">Mark as done </button>
                                        }

                                        {row.student_status==true &&
                                        <span className="badge bg-primary">completed</span>
                                        }
                                    </td>
                                   
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