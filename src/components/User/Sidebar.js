import { Link } from "react-router-dom";
function Sidebar(){
    return(

 

<div className="card">
   
    <div className="list-group list-group-flush">
        
        <Link to="/userdashboard" className="list-group-item list-group=item-action">Dashboard</Link>
        <Link to="/mycourses" className="list-group-item list-group=item-action">My courses</Link>
        <Link to="/favcourses" className="list-group-item list-group=item-action">Favourite courses</Link>
        <Link to="/reccourses" className="list-group-item list-group=item-action">Recommended courses</Link>
        <Link to="/profile" className="list-group-item list-group=item-action">profile setting</Link>
        <Link to="/changepass" className="list-group-item list-group=item-action">Change password</Link>
        <Link to="/userlogin" className="list-group-item list-group=item-action text-danger">Logout</Link>
        </div>
    </div>
       )
    }

export default Sidebar;