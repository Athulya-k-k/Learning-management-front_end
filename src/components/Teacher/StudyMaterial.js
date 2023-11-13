import React from "react";
import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseUrl = "http://localhost:8000/api";

function StudyMaterial() {
  const [studyData, setstudyData] = useState([]);
  const [totalresults, setTotalResults] = useState([]);
  const { course_id } = useParams();

  useEffect(() => {
    try {
      axios.get(baseUrl + "/study-materials/" + course_id).then((res) => {
        setTotalResults(res.data.length);
        setstudyData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const downloadFile=(file_url)=>{
    window.location.href=file_url
  }



  const Swal = require("sweetalert2");

const handleDeleteClick = (study_id) => {
    Swal.fire({
      title: "Confirm",
      text: "Are you sure you want to delete this",
      icon: "info",
      confirmButtonText: "Continue",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios
          .delete(baseUrl + "/study-material/" + study_id+'/')
            .then((res) => {
              console.log(res);
              // Remove the deleted chapter from chapterData and update the total count
              const updatedstudyData = studyData.filter(
                (study) => study.id !== study_id
              );
              setstudyData(updatedstudyData);
              setTotalResults(updatedstudyData.length);
              Swal.fire("Success", "Data has been updated");
            })
            .catch((error) => {
              Swal.fire("Error", "Data not deleted");
            });
        } catch (error) {
          Swal.fire("Error", "Data not deleted");
        }
      } else {
        Swal.fire("Error", "Data not deleted");
      }
    });
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <div className="card-header">
              all study materials({totalresults})
              <Link
                className="btn btn-success float-end btn-sm"
                to={"/add-study/" + course_id}
              >
                Add StudyMaterial
              </Link>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Tiltle</th>
                    <th>upload</th>
                    <th>remarks</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(studyData) ? (
                    studyData.map((row, index) => (
                      <tr key={row.id}>
                        <td>
                        
                            {row.title}
                         
                         </td>
                        <td>
                        <button className="btn btn-outline-primary" onClick={()=>downloadFile(row.upload)}>Download File</button>
                        </td>
                        <td>{row.remarks}</td>
                        <td>
                          {/* <Link
                            to={`/edit-study/${row.id}`}
                            className="btn btn-sm text-white btn-info"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </Link> */}
                          <button
                            onClick={() => handleDeleteClick(row.id)}
                            className="btn btn-danger btn-sm"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
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

export default StudyMaterial;
