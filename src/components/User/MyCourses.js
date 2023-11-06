import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";

function MyCourses(){
    const [courseData, setCourseData] = useState([]);
    const studentId = localStorage.getItem("studentId");

    useEffect(() => {
        try {
          axios
            .get(baseUrl + "/fetch-enrolled-courses/"+studentId+'/' )
            .then((res) => {
              setCourseData(res.data);
            });
        } catch (error) {
          console.log(error);
        }
      }, []);
    //   console.log(courseData);

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                     

                   <div className="card">
                        <h5 className="card-header">my courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created by</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                {courseData.map((row, index) => 
                                    <tr>
                                    <td>  <Link to={`/detail/${row.course.id}/`}>{row.course.title}</Link></td>
                                    <td><Link to={`/teacherdetail/${row.course.teacher.id}/`}>{row.course.teacher.fullname}</Link></td>

                                   
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
export default MyCourses;