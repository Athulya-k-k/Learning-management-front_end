import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CheckQuizinCourse from "./CheckQuizinCourse";

const baseUrl = "http://localhost:8000/api";
function AssignQuiz() {
  const [quizData, setQuizData] = useState([]);
  const [courseData, setCourseData] = useState([]);

 
  const { course_id } = useParams();
  // const { quiz_id } = useParams();

  const teacherId = localStorage.getItem("teacherId");

  useEffect(() => {
    // Fetch the initial quiz data
    try {
      axios.get(baseUrl + "/teacher-quiz/" + teacherId).then((res) => {
        setQuizData(res.data);
       
      });
    } catch (error) {
      console.log(error);
    }
  }, [teacherId]);
  axios
      .get(baseUrl + '/course/' + course_id + '/')
      .then((response) => {
        const data = response.data;
        setCourseData(data);
       
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
      
  const Swal = require("sweetalert2");
  const assignQuiz = (quiz_id) => {
   
    const formData = new FormData();
    formData.append("course", course_id);
    formData.append("teacher", teacherId);
    formData.append("quiz", quiz_id);

    axios
      .post(baseUrl + "/quiz-assign-course/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          Swal.fire({
            title: 'quiz aasigned',
            icon: 'success',
            toast: true,
            timer: 3000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
          });
         
        }
      })
      .catch((error) => {
        console.error("Error enrolling in the course:", error);
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
            <h5 className="card-header">Assign Quiz(<span className="text-primary">{courseData.title}</span>)</h5>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                 
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {quizData.map((row, index) => 

                  <tr>
                    <td>
                    <Link to={`/all-questions/`+row.id}>
          {row.title}
        </Link>
                    </td>
                    <CheckQuizinCourse quiz={row.id} course={course_id}/>
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
export default AssignQuiz;