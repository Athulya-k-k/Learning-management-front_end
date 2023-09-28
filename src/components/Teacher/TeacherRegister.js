import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'

const baseUrl='http://127.0.0.1:8000/api/teacher/';
function TeacherRegister(){
    const[teacherData,setTeacherData]=useState({
        'fullname':'',
        'email':'',
        'password':'',
        'qualification':'',
        'mobile_no':'',
        'skills':'',
        'status':''
        
    });
  
// change element value

const handlechange=(event)=>{
    setTeacherData({
        ...teacherData,
        [event.target.name]:event.target.value
    })

}


// end

// submit form

const submitForm = (event) => {
    event.preventDefault(); // Prevent the default form submission and page refresh

    const teacherFormData = new FormData();
    teacherFormData.append('fullname', teacherData.fullname);
    teacherFormData.append('email', teacherData.email);
    teacherFormData.append('password', teacherData.password);
    teacherFormData.append('qualification', teacherData.qualification);
    teacherFormData.append('mobile_no', teacherData.mobile_no);
    teacherFormData.append('skills', teacherData.skills);

    try {
        axios.post(baseUrl, teacherFormData).then((response) => {
            setTeacherData({
                ...teacherData,
                'status': 'success'
            });

            // Reset the status after 2 seconds
            setTimeout(() => {
                setTeacherData({
                    'fullname': '',
                    'email': '',
                    'password': '',
                    'qualification': '',
                    'mobile_no': '',
                    'skills': '',
                    'status': ''
                });
            }, 2000); // 2000 milliseconds (2 seconds)
        });
    } catch (error) {
        console.log(error);
        setTeacherData({ 'status': 'error' });
    }
};


// end


const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
if(teacherLoginStatus=='true'){
  window.location.href='/teacherdashboard';
}

    return(
        <div className="container mt-4">
        <div className="row">
            <div className="col-6 offset-3">
                {teacherData.status==='success' && <p className="text-success">Thanks for registration</p> }
                {teacherData.status==='error' && <p className="text-danger">something went wrong</p> }
            <div className="card">
                <h3 className="card-header">Teacher Register</h3>
                <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">fullname</label>
                        <input value={teacherData.fullname} onChange={handlechange} type="text" name="fullname" className="form-control" />
                       
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">email</label>
                        <input value={teacherData.email} onChange={handlechange} type="email "name="email" className="form-control" />
                       
                    </div>
                    
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input value={teacherData.password} onChange={handlechange} type="password" name="password" className="form-control" id="exampleInputPassword1"/>
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

                   
                    <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
                    </form>

                </div>
            </div>
            </div>
        </div>

    </div>
   

    )

}
export default TeacherRegister;