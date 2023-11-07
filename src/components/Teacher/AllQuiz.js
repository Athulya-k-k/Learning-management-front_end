import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
function AllQuiz() {
  const [quizData, setQuizData] = useState([]);
  const [totalresults, setTotalResults] = useState([]);

  const teacherId = localStorage.getItem("teacherId");

  useEffect(() => {
    // Fetch the initial quiz data
    try {
      axios.get(baseUrl + "/teacher-quiz/" + teacherId).then((res) => {
        setQuizData(res.data);
        setTotalResults(res.data.length);
      });
    } catch (error) {
      console.log(error);
    }
  }, [teacherId]); // Add teacherId as a dependency

  const Swal = require("sweetalert2");
  const handleDeleteClick = (quiz_id) => {
    Swal.fire({
      title: "Confirm",
      text: "Are you sure you want to delete this?",
      icon: "info",
      confirmButtonText: "Continue",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(baseUrl + "/quiz/" + quiz_id).then((res) => {
            // After successful deletion, update the quiz data
            axios.get(baseUrl + "/teacher-quiz/" + teacherId).then((res) => {
              setTotalResults(res.data.length);
              setQuizData(res.data);
            });
            Swal.fire("success", "Data has been deleted");
          });
        } catch (error) {
          console.log(error);
        }
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
            <h5 className="card-header">All Quiz</h5>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                 
                    <th>Total Questions</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {quizData.map((quiz, index) => (
                    <tr>
                      <td>
                        <Link to={"/all-questions/" + quiz.id}>
                          {quiz.title}
                        </Link>
                      </td>
                     
                      <td>
                        <Link to="#">123</Link>
                      </td>
                      <td>
                        <Link
                          className="btn btn-info btn-sm "
                          to={`/edit-quiz/${quiz.id}`}
                        >
                          Edit
                        </Link>
                        <Link
                          className="btn btn-success btn-sm ms-2"
                          to={`/add-quiz-question/${quiz.id}`}
                        >
                          Add question
                        </Link>
                        <button onClick={() => handleDeleteClick(quiz.id)} className="btn btn-danger btn-sm ms-2">
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default AllQuiz;
