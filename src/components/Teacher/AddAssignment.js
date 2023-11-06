import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const baseUrl = "http://127.0.0.1:8000/api";

function AddAssignment() {
  const [assignmentData, setAssignmentData] = useState({
    title: "",
    detail: "",
  });

  const handleChange = (event) => {
    setAssignmentData({
      ...assignmentData,
      [event.target.name]: event.target.value,
    });
  };

  const { student_id } = useParams();
  const { teacher_id } = useParams();
  const formSubmit = () => {
    const formData = new FormData();

    formData.append("teacher", teacher_id);
    formData.append("title", assignmentData.title);
    formData.append("detail", assignmentData.detail);
    formData.append("student", student_id);

    axios
      .post(baseUrl + "/student-assignment/" + teacher_id + "/" + student_id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          Swal.fire({
            title: 'Assignment added',
            icon: 'success',
            toast: true,
            timer: 3000, // Adjust the duration (in milliseconds) as needed
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });

          // Do not clear the form data after the toast
        }
      })
      .catch((error) => {
        console.error("Error adding assignment:", error);
        if (error.response) {
          console.log(error.response.data);
        }
      });

    
          const notifyData = new FormData();
         
          notifyData.append("notify_subject", 'assignment');
          notifyData.append("notify_for", 'student');
          notifyData.append("student", student_id);
          notifyData.append("stu", student_id);
          notifyData.append("student", student_id);
          axios
          .post(baseUrl + "/save-notification/", notifyData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log('notification added');
          })
          window.location.reload();
        
          // Do not clear the form data after the toast
     
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Add chapter</h5>
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
                    value={assignmentData.title}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="description" className="col-sm-2 col-form-label">
                  Detail
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    name="detail"
                    id="detail"
                    onChange={handleChange}
                    value={assignmentData.detail}
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

export default AddAssignment;
