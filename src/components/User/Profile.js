import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://127.0.0.1:8000/api";


function Profile(){
    const[studentData,setStudentData]=useState({
        'fullname':'',
        'email':'',
        'username':'',
        'interest':'',
        'profile_img': "",
        'p_img': "",
       
        
    });
    const studentId = localStorage.getItem("studentId");


   
      
        useEffect(() => {
            axios
              .get(baseUrl + "/student/" + studentId+'/')
              .then((res) => {
                setStudentData({
                  fullname: res.data.fullname,
                  email: res.data.email,
                  username: res.data.username,
                  interest: res.data.interest,
                  profile_img: res.data.profile_img,
                  p_img: "",
                });
              })
              .catch((error) => {
                console.error(error);
              });
          }, []);

console.log(studentData);

    const handlechange=(event)=>{
        setStudentData({
            ...studentData,
            [event.target.name]:event.target.value
        })
    
    }
    

    const handleFileChange = (event) => {
        // Check if a file is selected
        if (event.target.files.length > 0) {
            setStudentData({
            ...studentData,
            [event.target.name]: event.target.files[0],
          });
        }
      };
    
    // end
    
    // submit form
    
    const submitForm = (event) => {
        event.preventDefault(); // Prevent the default form submission and page refresh
      
        const studentFormData = new FormData();
        studentFormData.append('fullname', studentData.fullname);
        studentFormData.append('email', studentData.email);
        studentFormData.append('username', studentData.username);
        studentFormData.append('interest', studentData.interest);
       
      
        if (studentData.p_img !== null) {
          if (studentData.p_img instanceof Blob) {
            studentFormData.append("profile_img", studentData.p_img, studentData.p_img.name);
          }
        }
      
        try {
          axios.put(baseUrl + "/student/" + studentId + '/', studentFormData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }).then((response) => {
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
      
    
    const studentLoginStatus=localStorage.getItem('studentLoginStatus')
if(studentLoginStatus!='true'){
  window.location.href='/userlogin';
}

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                  <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile Setting</h5>
                        <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">fullname</label>
                        <input value={studentData.fullname} onChange={handlechange} type="text" name="fullname" className="form-control"  />
                       
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">email</label>
                        <input value={studentData.email} onChange={handlechange} type="email "name="email" className="form-control" />
                       
                    </div>

                    <div className="mb-3">
                  <label htmlFor="featured_img" className="form-label">
                    Profile image
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    name="p_img"
                    className="form-control"
                    id="profile_img"
                  />
                  {studentData.profile_img && (
                    <p className="mt-2">
                      {" "}
                      <img src={studentData.profile_img} width="300" />
                    </p>
                  )}
                </div>
                    
                   

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">username</label>
                        <input value={studentData.username} onChange={handlechange} type="text" name="username" className="form-control" />
                       
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">interest</label>
                        <input  value={studentData.interest} onChange={handlechange} type="text" name="interest" className="form-control" />
                       
                    </div>

                 

                   
                    <button className='btn btn-primary' onClick={submitForm} type="submit">update</button>
                    </form>

                </div>
                            </div>
                        </section>
                
            </div>

        </div>
       
    )

}
export default Profile;