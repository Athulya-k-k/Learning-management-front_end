import React from 'react'
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";


function CheckQuizinCourse(props) {
    const [quizData, setQuizData] = useState([]);
    const teacherId=localStorage.getItem('teacherId')

    useEffect(()=>{
        try{
            axios.get(`${baseUrl}/fetch-quiz-assign-status/${props.quiz}/${props.course}`)
            .then((res)=>{
                setQuizData(res.data)
            })
        }catch(error){
            console.log(error);
        }
    })



    const Swal = require("sweetalert2");
    const assignQuiz = (quiz_id) => {
     
      const formData = new FormData();
      formData.append("course", props.course);
      formData.append("teacher", teacherId);
      formData.append("quiz",props.quiz);
  
      axios
        .post(baseUrl + "/quiz-assign-course/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
           window.location.reload();
           
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
    <td>
      
{quizData.bool == false &&
<button onClick={()=>assignQuiz(props.quiz)} className='btn btn-success btn-sm ms-2'>Assign Quiz</button>

}
{quizData.bool==true &&
<span className='text success'>Assigned</span>
}

    </td>
  )
}

export default CheckQuizinCourse
