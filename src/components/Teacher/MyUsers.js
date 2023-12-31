import { Link, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
function UserList() {
  const [studentData, setStudentData] = useState([]);
  const teacherId = localStorage.getItem("teacherId");
 

  useEffect(() => {
    try {
      axios
        .get(baseUrl + "/fetch-all-enrolled-students/"+teacherId+'/' )
        .then((res) => {
          setStudentData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(studentData);

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">all Students List</h5>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Assignment</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((row, index) => 
                    <tr>
                      <td>
                        <Link to={`/view-student/` +row. student.id}>
                          {row.student.fullname}
                        </Link>
                      </td>
                      <td>{row.student.email}</td>
                      <td>{row.student.username}</td>
                      <td>
                        <Link to={`/show-assignment/${row.student.id}/${teacherId}`} className="btn btn-sm btn-warning ms-2 ">Assignments</Link>
                        <Link to={`/add-assignment/${row.student.id}/${teacherId}`} className="btn btn-sm btn-success ms-2 "> Add Assignments</Link>
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
  );
}
export default UserList;
