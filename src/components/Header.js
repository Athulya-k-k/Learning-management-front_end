import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function Header() {
  const [searchstring, setsearchstring] = useState({
    'search':''
   } );
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  const studentLoginStatus=localStorage.getItem('studentLoginStatus')

  const handleChange = (event) => {
    setsearchstring({
      ...searchstring,
      [event.target.name]: event.target.value,
    });
  };

  const searchCourse=()=>{
    if (searchstring.search!=''){
      window.location.href='/search/'+searchstring.search
    }
   
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Learning Hub
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <form class="d-flex" role="search">
        <input name="search" onChange={handleChange} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={searchCourse} class="btn btn-warning" type="button">Search</button>
      </form>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/allcourses">
                Courses
              </Link>
            </li>
           
          </ul>
          <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Teacher
            </Link>
         
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              {teacherLoginStatus!='true' &&
              <>
              <li>
               
                <Link className="dropdown-item" to="/teacherlogin">
                  Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/teacherregister">
                  Register
                </Link>
              </li>
              </>
             }
              <li>
                <Link className="dropdown-item" to="/teacherdashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/teacherlogout">
                  Logout
                </Link>
              </li>
            </ul>
          
          </li>
        </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User
            </Link>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            {studentLoginStatus!='true' &&
            <>
              <li>
                <Link className="dropdown-item" to="/userlogin">
                  Login
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/userregister">
                  Register
                </Link>
              </li>
              </>
}
              <li>
               
              
                <Link className="dropdown-item" to="/userdashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="userlogout">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
