import { Link, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://127.0.0.1:8000/api";

function EditQuiz() {
  const [QuizData, setQuizData] = useState({
    title: "",
    detail: "",
  });
  const teacherId = localStorage.getItem("teacherId");

  const {quiz_id } = useParams();

 

  // fetch current quiz data
  useEffect(() => {
    // Fetch current quiz data
    axios
      .get(baseUrl + "/teacher-quiz-detail/" + quiz_id)
      .then((res) => {
        setQuizData({
         
          title: res.data.title,
          detail: res.data.detail
         
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Make sure to include course_id in the dependency array.

  //end

  const handleChange = (event) => {
    setQuizData({
      ...QuizData,
      [event.target.name]: event.target.value,
    });
  };

 
  const formSubmit = () => {
    const formData = new FormData();

   
    formData.append("teacher", teacherId); // You may need to replace this with the actual teacher ID.
    formData.append("title", QuizData.title);
    formData.append("detail", QuizData.detail);
   

  

    axios
      .put(baseUrl + "/teacher-quiz-detail/" + quiz_id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status == 200) {
          Swal.fire({
            title: "Data has been updated",
            icon: "success",
            toast: true,
            timer: 3000,
            position: "top-right",
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
      })
      .catch((error) => {
        // Handle and log the error here
        console.error(error);

        // You can also access the response data if available
        if (error.response) {
          console.log(error.response.data);
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
            <h5 className="card-header">Edit Quiz</h5>
            <div className="card-body">
              <form>
              
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    onChange={handleChange}
                    value={QuizData.title}
                    type="text"
                    name="title"
                    className="form-control"
                    id="title"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    detail
                  </label>
                  <input
                    onChange={handleChange}
                    value={QuizData.detail}
                    type="text"
                    name="detail"
                    className="form-control"
                    id="description"
                  />
                </div>

              

                

                <hr />
                <button
                  type="button"
                  onClick={formSubmit}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EditQuiz;
