import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CourseDetail() {
  let { course_id } = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img src="/logo512.png" className="img-thumbnail" alt=".." />
        </div>
        <div className="col-8">
          <h3>Course Title</h3>
          <p>
            Using a combination of grid and utility classes, cards can be made
            horizontal in a mobile-friendly and responsive way. In the example
            below, we remove the grid gutters with .g-0 and use .col-md-*
            classes to make the card horizontal at the md breakpoint. Further
            adjustments may be needed depending on your card content.
          </p>
          <p className="fw-bold">
            Course By: <Link to="/teacherdetail/1">Teacher1</Link>
          </p>
          <p className="fw-bold">Duration: 3 hours 30 mins</p>
          <p className="fw-bold">Total Enrolled: 30 students</p>
          <p className="fw-bold">Rating: 4/5</p>
        </div>
      </div>
      {/* course videos */}
      <div className="card mt-4">
        <div className="card-header">
          <h3>Course Videos</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            intro{" "}
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
          <li className="list-group-item">
            intro{" "}
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
          <li className="list-group-item">
            intro{" "}
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
          <li className="list-group-item">
            intro{" "}
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
          {/* Other video items go here */}
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
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div></div>
            <div className="modal-footer">
             
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="pb-1 mb-4">Related Courses</h3>
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card">
              <Link to="/detail/1">
                <img
                  src="/logo512.png"
                  className="card-img-top"
                  alt="Course 1"
                />
              </Link>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1">Course title</Link>
              </h5>
            </div>
          </div>

          {/* Include the second card within the same col-md-3 */}

          <div className="col-md-3">
            <div className="card">
              <Link to="/detail/2"> {/* Update the link to the appropriate URL */}
                <img
                  src="/logo512.png"
                  className="card-img-top"
                  alt="Course 2"
                />
              </Link>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/2">Course title</Link> {/* Update the link to the appropriate URL */}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
