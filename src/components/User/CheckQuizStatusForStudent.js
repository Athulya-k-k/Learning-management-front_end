import React from 'react'

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:8000/api";


function CheckQuizStatusForStudent(props) {
    const [quizData, setQuizData] = useState([]);
    const studentId=localStorage.getItem('studentId')

    useEffect(()=>{
        try{
            axios.get(`${baseUrl}/fetch-quiz-attempt-status/${props.quiz}/${props.student}`)
            .then((res)=>{
                setQuizData(res.data)
            })
        }catch(error){
            console.log(error);
        }
    })



   

  return (
    <td>
      
    {quizData.bool == true &&
      <span className='text success'>attempted</span>
    
    }
    {quizData.bool==false &&
    <Link to={`/take-quiz/${props.quiz}`} className='btn btn-success btn-sm ms-2'>Take Quiz</Link>
  
    }
    
        </td>
  )
}

export default CheckQuizStatusForStudent
