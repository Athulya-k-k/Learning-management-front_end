import { useState } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function Login(){
    const [studentLoginData, setstudentLoginData] = useState({
        email: "",
        password: "",
      });
      const [errormsg, setErrorMsg] = useState('');
    
      const handleChange = (event) => {
        setstudentLoginData({
          ...studentLoginData,
          [event.target.name]: event.target.value
        });
      };
    
      const submitForm = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        const studentFormData = new FormData();
        studentFormData.append('email', studentLoginData.email);
        studentFormData.append('password', studentLoginData.password);
    
        try {
          axios.post(baseUrl + '/student-login', studentFormData)
            .then((res) => {
              if (res.data.bool === true) {
                localStorage.setItem('studentLoginStatus', true);
                localStorage.setItem('studentId', res.data.student_id);
                window.location.href = '/userdashboard';
              } else {
                setErrorMsg('Invalid email or password');
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      };
    
      const studentLoginStatus = localStorage.getItem('studentLoginStatus');
      if (studentLoginStatus === 'true') {
     
        window.location.href = '/userdashboard';
      }
      
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                <div className="card">
                    <h3 className="card-header">User Login</h3>
                    <div className="card-body">
                    {errormsg && <p className="text-danger">{errormsg}</p>}
                     <form onSubmit={submitForm}>
                   
                     <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    value={studentLoginData.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input
                    value={studentLoginData.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                        {/* <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Remember me</label>
                        </div> */}
                        <button type="submit" className="btn btn-primary">Login</button>
                        </form>

                    </div>
                </div>
                </div>
            </div>

        </div>
       
    )

}
export default Login;