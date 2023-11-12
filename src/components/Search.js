import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const baseUrl = "http://localhost:8000/api";

function Search() {
  const [courseData, setCourseData] = useState([]);
  const { searchstring } = useParams();


  useEffect(() => {
    try {
      axios.get(baseUrl + "/search-courses/"+searchstring).then((res) => {
        console.log(res.data); // Log the response to the console
        setCourseData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  


  return (
    <div className='container mt-3'>
      <h3 className="pb-1 mb-4">Searched for <span className='text-primary'>{searchstring}</span></h3>
      <div className="row mb-4">
      {courseData && courseData.map((course, index) => (
  <div className="col-md-3 mb-4" key={index}>
    <div className="card">
      <Link to={`/detail/${course.id}`}>
        <img src={course.featured_img} className="card-img-top" alt={course.title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/detail/${course.id}`}>{course.title}</Link>
        </h5>
      </div>
    </div>
  </div>
))}
</div>

      {/* Create a new row for the next set of columns */}
     
      {/* pagination start */}
      <nav aria-label="Page navigation example mt-5">
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
            </nav>
      {/* end */}
    </div>
  );
}

export default Search;
