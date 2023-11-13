import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseUrl = "http://localhost:8000/api";

function StudstudyMaterial() {
  const [studyData, setstudyData] = useState([]);
  const [totalresults, setTotalResults] = useState([]);
  const { course_id } = useParams();

  useEffect(() => {
    try {
      axios.get(baseUrl + "/user/study-materials/" + course_id).then((res) => {
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

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <div className="card-header">
              all study materials({totalresults})
            
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Tiltle</th>
                    <th>Detail</th>
                    <th>upload</th>
                    <th>remarks</th>
                  
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
                        
                            {row.description}
                         
                         </td>
                        <td>
                         <button className="btn btn-outline-primary" onClick={()=>downloadFile(row.upload)}>Download File</button>
                        </td>
                        <td>{row.remarks}</td>
                        {/* <td> */}
                          {/* <Link
                            to={`/edit-study/${row.id}`}
                            className="btn btn-sm text-white btn-info"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </Link> */}
                         
                        {/* </td> */}
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

export default StudstudyMaterial;
