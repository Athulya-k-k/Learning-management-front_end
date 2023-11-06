
import TeacherSidebar from "./TeacherSidebar";
import { useState,} from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function AddQuiz() {
 
  const [quizData, setquizData] = useState({
    title: "",
    detail:'',
   
  });



  const handleChange = (event) => {
    setquizData({
      ...quizData,
      [event.target.name]: event.target.value,
    });
  };



  const formSubmit = () => {
    const teacher_id=localStorage.getItem('teacherId')
    const formData = new FormData();

   
    formData.append("teacher", teacher_id); // You may need to replace this with the actual teacher ID.
    formData.append("title", quizData.title);
    formData.append("detail", quizData.detail);


    axios
      .post(baseUrl + "/quiz/", formData, {
       
      })
      .then((res) => {
        window.location.href = "/add-quiz";
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
            <h5 className="card-header">Add quiz</h5>
            <div className="card-body">
              <form>
                

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="title"
                    className="form-control"
                    id="title"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Detail
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="detail"
                    className="form-control"
                    id="description"
                  />
                </div>


                
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

export default AddQuiz;
