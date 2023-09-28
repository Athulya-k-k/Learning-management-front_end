import { Link } from "react-router-dom";
function TeacherSidebar(){
    return(

 

<div className="card">
   
    <div className="list-group list-group-flush">
        
        <Link to="/teacherdashboard" className="list-group-item list-group=item-action">Dashboard</Link>
        <Link to="/teachercourses" className="list-group-item list-group=item-action">My courses</Link>
        <Link to="/addcourses" className="list-group-item list-group=item-action">Add courses</Link>
       
        <Link to="/myusers" className="list-group-item list-group=item-action">My users</Link>
        <Link to="/teacherprofile" className="list-group-item list-group=item-action">profile setting</Link>
        <Link to="/teacherchangepass" className="list-group-item list-group=item-action">Change password</Link>
        <Link to="/teacherlogin" className="list-group-item list-group=item-action text-danger">Logout</Link>
        </div>
    </div>
       )
    }

export default TeacherSidebar;