import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://127.0.0.1:8000/api";




function ChangePass(){
    const[studentData,setStudentData]=useState({
        'password':''
       
        
    });
    const studentId = localStorage.getItem("studentId");

    const handlechange=(event)=>{
        setStudentData({
            ...studentData,
            [event.target.name]:event.target.value
        })
    
    }
    
    const submitForm = (event) => {
        event.preventDefault(); // Prevent the default form submission and page refresh
      
        const studentFormData = new FormData();
        studentFormData.append('password', studentData.password);
       
      
       
      
        try {
          axios.post(baseUrl + "/student/change-password/" + studentId + '/', studentFormData).then((response) => {
            if (response.status === 200) {
              // Display a success toast
              Swal.fire({
                // title: "Success",
                text: "Data has been updated",
                icon: "success",
                toast: true,
                timer: 3000,
                position: "top-right",
                timerProgressBar: true,
                showConfirmButton: false,
              });
      
              // Reset only the status and specific fields if needed
              setStudentData({
                ...studentData,
                status: "",
                p_img: "", // Optionally clear specific fields
              });
            }
          });
        } catch (error) {
          console.log(error);
      
          // Display an error toast
          Swal.fire({
            title: "Error",
            text: "Something went wrong. Please try again.",
            icon: "error",
            toast: true,
            timer: 3000,
            position: "top-right",
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
      };
      


    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">change password</h5>
                        <div className="card-body">

                         
                        <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">New password</label>
                        <input  type="password" name="password" value={studentData.password} onChange={handlechange} className="form-control" id="inputPassword"  />
                       
                    </div>
                        <hr/>
                           <buton className="btn btn-primary" onClick={submitForm}>Update</buton>
                        
                            </div>
                            </div>
                        </section>
                
            </div>

        </div>
       
    )

}
export default ChangePass;