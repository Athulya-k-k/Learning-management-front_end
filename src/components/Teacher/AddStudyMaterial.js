import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Swal = require("sweetalert2");

const baseUrl = "http://127.0.0.1:8000/api";

function AddStudyMaterial() {
  const [studyData, setstudyData] = useState({
    title: "",
    description: "",
    upload: null, // Use null initially
    remarks: "",
  });

  const handleChange = (event) => {
    setstudyData({
      ...studyData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    // Check if a file is selected
    if (event.target.files.length > 0) {
      setstudyData({
        ...studyData,
        [event.target.name]: event.target.files[0],
      });
    }
  };
  const { course_id } = useParams();
  const formSubmit = () => {
    const formData = new FormData();

    formData.append("course", course_id); // You may need to replace this with the actual course ID.
    formData.append("title", studyData.title);
    formData.append("description", studyData.description);
    formData.append("upload", studyData.upload,studyData.upload.name);

    formData.append("remarks", studyData.remarks);
try{
    axios
      .post(baseUrl + "/study-materials/"+course_id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status==200||res.status==201){
        Swal.fire({
            title: "data added",
            icon: "success",
            toast:true,
            timer:3000,
            position:'top-right',
            timerProgressBar:true,
            showConfirmButton: false,
          })
        window.location.reload()
        }
    })

}catch(error){
       
        console.error(error);
}
    
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Add StudyMaterial</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    id="title"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="description"
                  className="col-sm-2 col-form-label"
                >
                  Description
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    id="description"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="upload" className="col-sm-2 col-form-label">
                  upload
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    className="form-control"
                    name="upload"
                    id="upload"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="remarks" className="col-sm-2 col-form-label">
                  Remarks
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="remarks"
                    id="remarks"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <hr />
              <button onClick={formSubmit} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddStudyMaterial;
