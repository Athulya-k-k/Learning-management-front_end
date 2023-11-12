import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import CheckQuizStatusForStudent from "./CheckQuizStatusForStudent";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";

function CourseQuizList(){
    const [quizData, setquizData] = useState([]);
    const studentId = localStorage.getItem("studentId");
    const {course_id}=useParams()

    useEffect(() => {
        try {
          axios
            .get(baseUrl + '/fetch-assigned-quiz/'+course_id )
            .then((res) => {
              setquizData(res.data);
            });
        } catch (error) {
          console.log(error);
        }
      }, []);
    //   console.log(courseData);

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                     

                   <div className="card">
                        <h5 className="card-header">Quiz List</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Quiz</th>
                                        
                                        <th>action</th>
                                       
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {quizData.map((row,index)=>
                                     <tr>
                                     <td> {row.quiz.title}</td>
                                     <CheckQuizStatusForStudent quiz={row.id} student={studentId}/>
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
export default CourseQuizList;