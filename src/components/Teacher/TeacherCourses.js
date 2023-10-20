import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState,useEffect } from "react";
import axios from 'axios'

const baseUrl='http://localhost:8000/api'
function TeacherCourses(){
    const[courseData,setCourseData]=useState([]);

    const teacherId=localStorage.getItem('teacherId');
    console.log(teacherId);

    useEffect(()=>{
        try{
        axios.get(baseUrl+'/teachercourses/'+teacherId)
        .then((res)=>{
            setCourseData(res.data)
        })
    }catch(error){
        console.log(error);
    }
},[]);
console.log(courseData);



    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar/>
                </aside>
                <section className="col-md-9">
                     

                   <div className="card">
                        <h5 className="card-header">my courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>image</th>
                                        <th>Total enrolled</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((course,index)=> 
                                    <tr>           
                                    <td><Link to={'/allchapters/'+course.id}>{course.title}</Link></td>
                                    <td><img src={course.featured_img} width='80' className="rounded" alt={course.title}></img></td>
                                    <td><Link to='#'>22</Link></td>
                                    <td>
                                    <Link className="btn btn-info btn-sm " to={`/editcourse/${course.id}`}>Edit</Link>
                                    <Link className="btn btn-success btn-sm ms-2" to={`/addchapter/${course.id}`}>Add chapter</Link>
                                    <button className="btn btn-danger btn-sm ms-2">delete</button>
                                    </td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </div> 
                        </div>
                  
                 
                    
                </section>
                
            </div>

        </div>
       
    )

}
export default TeacherCourses;