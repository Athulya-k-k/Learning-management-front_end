import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api/student/';

function Register() {
    const [studentData, setStudentData] = useState({
        'fullname': '',
        'email': '',
        'password': '',
        'username': '',
        'interest': '',
        'status': ''
    });

    // State variable to track form submission without data
    const [formSubmittedWithoutData, setFormSubmittedWithoutData] = useState(false);

    const handlechange = (event) => {
        setStudentData({
            ...studentData,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = (event) => {
        event.preventDefault(); // Prevent the default form submission and page refresh

        // Check if any of the required fields are empty
        if (
            studentData.fullname === '' ||
            studentData.email === '' ||
            studentData.password === '' ||
            studentData.username === ''
        ) {
            // Set the state variable to indicate form submitted without data
            setFormSubmittedWithoutData(true);
        } else {
            // Clear the formSubmittedWithoutData flag
            setFormSubmittedWithoutData(false);

            // Continue with form submission
            const studentFormData = new FormData();
            studentFormData.append('fullname', studentData.fullname);
            studentFormData.append('email', studentData.email);
            studentFormData.append('password', studentData.password);
            studentFormData.append('username', studentData.username);
            studentFormData.append('interest', studentData.interest);

            try {
                axios.post(baseUrl, studentFormData).then((response) => {
                    setStudentData({
                        ...studentData,
                        'status': 'success'
                    });

                    // Reset the status after 2 seconds
                    setTimeout(() => {
                        setStudentData({
                            'fullname': '',
                            'email': '',
                            'password': '',
                            'username': '',
                            'interest': '',
                        });
                    }, 2000); // 2000 milliseconds (2 seconds)
                });
            } catch (error) {
                console.log(error);
                setStudentData({ 'status': 'error' });
            }
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {formSubmittedWithoutData && (
                        <p className="text-danger">Please fill in all required fields.</p>
                    )}

                    {studentData.status === 'success' && <p className="text-success">Thanks for registration</p>}
                    {studentData.status === 'error' && <p className="text-danger">Something went wrong</p>}

                    <div className="card">
                        <h3 className="card-header">User Register</h3>
                        <div className="card-body">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Fullname</label>
                                <input type="text" value={studentData.fullname} name="fullname" onChange={handlechange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" value={studentData.email} name="email" onChange={handlechange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" value={studentData.username} name="username" onChange={handlechange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={studentData.password} name="password" onChange={handlechange} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Interest</label>
                                <textarea name="interest" value={studentData.interest} onChange={handlechange} className="form-control"></textarea>
                            </div>
                            <button type="submit" onClick={submitForm} className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
