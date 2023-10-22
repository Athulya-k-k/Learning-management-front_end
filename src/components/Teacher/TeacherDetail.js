import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const baseUrl = "http://localhost:8000/api";

function TeacherDetail() {
    const [courseData, setCourseData] = useState([]);
    const [teacherData, setTeacherData] = useState([]);
    const [skillslist,setskillsListData]=useState([]);
    let { teacher_id } = useParams();
    useEffect(() => {
        axios
          .get(baseUrl + '/teacher/' + teacher_id+'/')
          .then((response) => {
            console.log(response.data); // Log the course data
            setCourseData(response.data.teacher_courses);
            setTeacherData(response.data);
            setskillsListData(response.data.skill_list);
          })
          .catch((error) => {
            console.error("Error fetching course data:", error);
          });
      }, []);
    
  return (
    <div className="container mt-3">
    <div className="row">
        <div className="col-4">
            <img src="/logo512.png" className="img-thumbnail" alt="teacher"/>
        </div>
        <div className="col-8">
            <h3>{teacherData.fullname}</h3>
            <p>{teacherData.detail}</p>
            <p className="fw-bold">skills:&nbsp;
            
            {skillslist.map((skill,index)=>
          <>
          <Link to={`/teacherskillcourses/${skill.trim()}/${  teacherData.id}`} className="badge bg-warning ml-2">{skill.trim()}</Link>&nbsp;
          </>
          )}
            </p>
            <p className="fw-bold">recent courses:<Link to="/category/php">php</Link></p>
 
            <p className="fw-bold">Rating:4/5</p>
        </div>
    </div>
        {/* course videos */}
        <div className="card mt-4" >
        
            <h3 className='card-header'>course list</h3>
            <div className='list-group list-group-flush'>
                {courseData.map((course,index)=>
                <Link to={`/detail/${course.id}`} className='list-group-item'>{course.title}</Link>
                )}
            </div>
         </div>
      
        </div>
      
  


  )
}

export default TeacherDetail





