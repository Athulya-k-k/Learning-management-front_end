import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://127.0.0.1:8000/api";


function TeacherProfile(){
    const[teacherData,setTeacherData]=useState({
        'fullname':'',
        'email':'',
       
        'qualification':'',
        'mobile_no':'',
        'skills':'',
       
        'profile_img': "",
        'p_img': "",
        'status':'',
        
    });
    const teacherId = localStorage.getItem("teacherId");


   
      
        useEffect(() => {
            axios
              .get(baseUrl + "/teacher/" + teacherId+'/')
              .then((res) => {
                setTeacherData({
                  fullname: res.data.fullname,
                  email: res.data.email,
                  qualification: res.data.qualification,
                  mobile_no: res.data.mobile_no,
                  skills: res.data.skills,
                  profile_img: res.data.profile_img,
                  p_img: "",
                });
              })
              .catch((error) => {
                console.error(error);
              });
          }, []);

console.log(teacherData);

    const handlechange=(event)=>{
        setTeacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        })
    
    }
    

    const handleFileChange = (event) => {
        // Check if a file is selected
        if (event.target.files.length > 0) {
          setTeacherData({
            ...teacherData,
            [event.target.name]: event.target.files[0],
          });
        }
      };
    
    // end
    
    // submit form
    
    const submitForm = (event) => {
        event.preventDefault(); // Prevent the default form submission and page refresh
      
        const teacherFormData = new FormData();
        teacherFormData.append('fullname', teacherData.fullname);
        teacherFormData.append('email', teacherData.email);
        teacherFormData.append('qualification', teacherData.qualification);
        teacherFormData.append('mobile_no', teacherData.mobile_no);
        teacherFormData.append('skills', teacherData.skills);
      
        if (teacherData.p_img !== null) {
          if (teacherData.p_img instanceof Blob) {
            teacherFormData.append("profile_img", teacherData.p_img, teacherData.p_img.name);
          }
        }
      
        try {
          axios.put(baseUrl + "/teacher/" + teacherId + '/', teacherFormData, {
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
              setTeacherData({
                ...teacherData,
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
      
    
    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
if(teacherLoginStatus!='true'){
  window.location.href='/teacherlogin';
}

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                  <TeacherSidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile Setting</h5>
                        <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">fullname</label>
                        <input value={teacherData.fullname} onChange={handlechange} type="text" name="fullname" className="form-control"  />
                       
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">email</label>
                        <input value={teacherData.email} onChange={handlechange} type="email "name="email" className="form-control" />
                       
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
                  {teacherData.profile_img && (
                    <p className="mt-2">
                      {" "}
                      <img src={teacherData.profile_img} width="300" />
                    </p>
                  )}
                </div>
                    
                   

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">qualification</label>
                        <input value={teacherData.qualification} onChange={handlechange} type="text" name="qualification" className="form-control" />
                       
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">mobile</label>
                        <input  value={teacherData.mobile_no} onChange={handlechange} type="number" name="mobile_no" className="form-control" />
                       
                    </div>

                                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">skills</label>
                <textarea  value={teacherData.skills} onChange={handlechange} className="form-control" name="skills"></textarea>
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
export default TeacherProfile;