import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
function AllQuiz() {
  const [quizData, setQuizData] = useState([]);

  const teacherId = localStorage.getItem("teacherId");
  console.log(teacherId);

  useEffect(() => {
    try {
      axios.get(baseUrl + "/teacher-quiz/" + teacherId).then((res) => {
        setQuizData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(quizData);

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
                          to="#"
                        >
                          Edit
                        </Link>
                        <Link
                          className="btn btn-success btn-sm ms-2"
                          to={`/add-quiz-question/${quiz.id}`}
                        >
                          Add question
                        </Link>
                        <button className="btn btn-danger btn-sm ms-2">
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
