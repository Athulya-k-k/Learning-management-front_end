import { useState } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function TeacherLogin() {
  const [teacherLoginData, setTeacherLoginData] = useState({
    email: "",
    password: "",
  });
  const [errormsg, setErrorMsg] = useState('');

  const handleChange = (event) => {
    setTeacherLoginData({
      ...teacherLoginData,
      [event.target.name]: event.target.value
    });
  };

  const submitForm = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const teacherFormData = new FormData();
    teacherFormData.append('email', teacherLoginData.email);
    teacherFormData.append('password', teacherLoginData.password);

    try {
      axios.post(baseUrl + '/teacher-login', teacherFormData)
        .then((res) => {
          if (res.data.bool === true) {
            localStorage.setItem('teacherLoginStatus', true);
            localStorage.setItem('teacherId', res.data.teacher_id);
            window.location.href = '/teacherdashboard';
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

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
  if (teacherLoginStatus === 'true') {
    window.location.href = '/teacherdashboard';
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card">
            <h3 className="card-header">Teacher Login</h3>
            <div className="card-body">
              {errormsg && <p className="text-danger">{errormsg}</p>}
              <form onSubmit={submitForm}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    value={teacherLoginData.email}
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
                    value={teacherLoginData.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="exampleCheck1"
                  >
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherLogin;
