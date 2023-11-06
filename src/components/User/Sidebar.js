import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const baseUrl = "http://127.0.0.1:8000/api";

function Sidebar(){
    const[notifydata,setnotifydata]=useState([]);
    const studentId=localStorage.getItem('studentId');
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/student/fetch-all-notifications/'+studentId+'/')
            .then((res)=>{
                console.log(res);
                setnotifydata(res.data)
            })
        }catch(error){
            console.log(error);
        }
    },[]);

    return(

        

<div className="card">
   
    <div className="list-group list-group-flush">
        
        <Link to="/userdashboard" className="list-group-item list-group=item-action">Dashboard</Link>
        <Link to="/mycourses" className="list-group-item list-group=item-action">My courses</Link>
        <Link to="/favcourses" className="list-group-item list-group=item-action">Favourite courses</Link>
        <Link to="/reccourses" className="list-group-item list-group=item-action">Recommended courses</Link>
        <Link to="/my-assignments" className="list-group-item list-group=item-action"> Assignments<span className="float-end badge bg-danger">{notifydata.length}</span></Link>
        <Link to="/profile" className="list-group-item list-group=item-action">profile setting</Link>
        <Link to="/changepass" className="list-group-item list-group=item-action">Change password</Link>
        <Link to="/userlogout" className="list-group-item list-group=item-action text-danger">Logout</Link>
        </div>
    </div>
       )
    }

export default Sidebar;