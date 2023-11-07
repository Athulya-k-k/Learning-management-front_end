import React from "react";
import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseUrl = "http://localhost:8000/api";

function QuizQuestions() {
  const [questionData, setquestionData] = useState([]);
  const [totalresults, setTotalResults] = useState([]);
  const { quiz_id } = useParams();

  useEffect(() => {
    try {
      axios.get(baseUrl + "/quiz-questions/" + quiz_id).then((res) => {
        setTotalResults(res.data.length);
        setquestionData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log();

  const Swal = require("sweetalert2");
  const handleDeleteClick = (question_id) => {
    Swal.fire({
      title: "Confirm",
      text: "Are you sure you want to delete this",
      icon: "info",
      confirmButtonText: "Continue",
      showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
          try {
            axios.delete(baseUrl + "/question/" + question_id).then((res) => {
              // After successful deletion, update the quiz data
              axios.get(baseUrl + "/quiz-questions/" + quiz_id).then((res) => {
                setTotalResults(res.data.length);
                setquestionData(res.data);
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
            <div className="card-header">
              all Questions({totalresults})
              <Link
                className="btn btn-success float-end btn-sm"
                to={"/addchapter/" + quiz_id}
              >
                Add question
              </Link>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(questionData) ? (
                    questionData.map((row, index) => (
                      <tr key={row.id}>
                        <td>
                          <Link to={`/edit-question/`+row.id}>
                            {row.questions}
                          </Link>
                        </td>
                      
                       
                        <td>
                          <Link
                            to={`/edit-question/${row.id}`}
                            className="btn btn-sm text-white btn-info"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </Link>
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

export default QuizQuestions;
