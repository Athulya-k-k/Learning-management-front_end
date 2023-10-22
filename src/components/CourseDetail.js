import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const siteUrl = "http://localhost:8000/";
const baseUrl = "http://localhost:8000/api";
function CourseDetail() {
  const [courseData, setCourseData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [chapterData, setChapterData] = useState([]);
  const [relatedcourseData, setRelatedCourseData] = useState([]);
  const [techlistData, setTechListData] = useState([]);
  let { course_id } = useParams();  

  useEffect(() => {
    axios
      .get(baseUrl + '/course/' + course_id+'/')
      .then((response) => {
        console.log(response.data); // Log the course data
        setCourseData(response.data);
        setTeacherData(response.data.teacher);
        setChapterData(response.data.course_chapters)
        setRelatedCourseData(JSON.parse(response.data.related_videos))
        setTechListData(response.data.tech_list)
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, []);

  console.log(courseData);
  console.log(relatedcourseData);
  
  

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img src={courseData.featured_img} className="img-thumbnail" alt={courseData.title} />
        </div>
        <div className="col-8">
          <h3>{courseData.title}</h3>
          <p>
            {courseData.description}
          </p>
          <p className="fw-bold">
            Course By: <Link to={`/teacherdetail/${teacherData.id}`}>{teacherData.fullname}</Link>
          </p>
          <p className="fw-bold">Techs:&nbsp;
          {techlistData.map((tech,index)=>
          <>
          <Link to={`/category/${tech.trim()}`} className="badge bg-warning ml-2">{tech.trim()}</Link>&nbsp;
          </>
          )}
          </p>
          <p className="fw-bold">Total Enrolled: 30 students</p>
          <p className="fw-bold">Rating: 4/5</p>
        </div>
      </div>
    
      <div className="card mt-4">
        <div className="card-header">
          <h5>In this Course</h5>
        </div>
        <ul className="list-group list-group-flush">
          {chapterData.map((chapter,index)=>
          <li className="list-group-item">
            {chapter.title}
            <span className="float-end">
              <span className="me-5">1 hour 30 mins</span>
              <button
                className="btn btn-sm btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#videoModal1" 
              >
                <i className="bi-youtube"></i>
              </button>
            </span>
          </li>
        )}
         
        
        </ul>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="videoModal1" 
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"><div className="ratio ratio-16x9">
            {chapterData.map((chapter,index)=>
  <iframe src={chapter.video} title={chapter.title} allowfullscreen></iframe>
            )}
</div></div>
            <div className="modal-footer">
             
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="pb-1 mb-4">Related Courses</h3>
        <div className="row mb-4">
        {relatedcourseData.map((rcourse,index)=>
          <div className="col-md-3">
            <div className="card">
              <Link target="__blank" to={`/detail/${rcourse.pk}`}>
                <img
                  src={`${siteUrl}media/${rcourse.fields.featured_img}`}
                  className="card-img-top"
                  alt={rcourse.fields.title}
                />
              </Link>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/detail/${rcourse.pk}`}>{rcourse.fields.title}</Link>
              </h5>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;