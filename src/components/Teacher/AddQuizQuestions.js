import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseUrl = "http://127.0.0.1:8000/api";

function AddQuizQuestions() {
  const [questionData, setquestionData] = useState({
    quiz: "",
    question: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    right_ans: "",
    
  });

  const handleChange = (event) => {
    setquestionData({
      ...questionData,
      [event.target.name]: event.target.value,
    });
  };


  const { quiz_id } = useParams();
  const formSubmit = () => {
    const formData = new FormData();

    formData.append("quiz", quiz_id); // You may need to replace this with the actual course ID.
    formData.append("question", questionData.question);
    formData.append("ans1", questionData.ans1);
    formData.append("ans2", questionData.ans2);
    formData.append("ans3", questionData.ans3);
    formData.append("ans4", questionData.ans4);
    formData.append("right_ans", questionData.right_ans);

   

    axios
      .post(baseUrl + "/quiz-questions/"+quiz_id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
     
      .then((res) => {
        if (res.status == 200) {
          const Swal = require("sweetalert2");

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
        window.location.reload()
      })
      .catch((error) => {
        console.error(error);
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
            <h5 className="card-header">Add Quiz</h5>
            <div className="card-body">
                <form>
<div className="mb-3">
    <label for="title" className="form-lable">Title</label>
    <input type="text" onChange={handleChange} name="title" id="title" className="form-control"/>
</div>
<div className="mb-3">
    <label for="title" className="form-lable">Ans 1</label>
    <input type="text" onChange={handleChange} name="ans1" id="ans1" className="form-control"/>
</div>
<div className="mb-3">
    <label for="title" className="form-lable">Ans 2</label>
    <input type="text" onChange={handleChange} name="ans2" id="ans2" className="form-control"/>
</div>
<div className="mb-3">
    <label for="title" className="form-lable">Ans 3</label>
    <input type="text" onChange={handleChange} name="ans3" id="ans3" className="form-control"/>
</div>
<div className="mb-3">
    <label for="title" className="form-lable">Ans 4</label>
    <input type="text" onChange={handleChange} name="ans4" id="ans4" className="form-control"/>
</div>
<div className="mb-3">
    <label for="title" className="form-lable">Right Ans</label>
    <input type="text" onChange={handleChange} name="right_ans" id="right_ans" className="form-control"/>
</div>
                </form>
            
             
              
             
            
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

export default AddQuizQuestions;
