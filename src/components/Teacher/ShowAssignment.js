import React from "react";
import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseUrl = "http://localhost:8000/api";

function ShowAssignment() {
  const [assignmentData, setAssignmentData] = useState([]);
  const [totalresults, setTotalResults] = useState([]);
  const { teacher_id } = useParams();
  const { student_id } = useParams();

  useEffect(() => {
    try {
      axios.get(baseUrl + "/student-assignment/" + teacher_id+'/'+student_id).then((res) => {
        setTotalResults(res.data.length);
        setAssignmentData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(assignmentData);

  const Swal = require("sweetalert2");
//   const handleDeleteClick = (chapter_id) => {
//     Swal.fire({
//       title: "Confirm",
//       text: "Are you sure you want to delete this",
//       icon: "info",
//       confirmButtonText: "Continue",
//       showCancelButton: true,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         try {
//           axios
//             .delete(baseUrl + "/chapter/" + chapter_id)
//             .then((res) => {
//               console.log(res);
//               // Remove the deleted chapter from chapterData and update the total count
//               const updatedChapterData = chapterData.filter(
//                 (chapter) => chapter.id !== chapter_id
//               );
//               setChapterData(updatedChapterData);
//               setTotalResults(updatedChapterData.length);
//               Swal.fire("Success", "Data has been updated");
//             })
//             .catch((error) => {
//               Swal.fire("Error", "Data not deleted");
//             });
//         } catch (error) {
//           Swal.fire("Error", "Data not deleted");
//         }
//       } else {
//         Swal.fire("Error", "Data not deleted");
//       }
//     });
//   };

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <div className="card-header">
              all Assignments({totalresults})
              <Link
                className="btn btn-success float-end btn-sm"
                to={`/add-assignment/${student_id}/${teacher_id}`}
              >
                Add assignment
              </Link>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Tiltle</th>
                    <th>Status</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(assignmentData) ? (
                    assignmentData.map((assignment, index) => (
                      <tr> 
                        <td>
                          
                            {assignment.title}</td>
                            <td>
                            {assignment.student_status==false &&
                                         <span className="badge bg-warning">Pending</span>
                                        }

                                        {assignment.student_status==true &&
                                        <span className="badge bg-success">completed</span>
                                        }
                         
                         </td>
                       
                    
                      
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No chapters available.</td>
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

export default ShowAssignment;
