import { Link, useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://127.0.0.1:8000/api";

function EditCourse() {
  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    category: "",
    title: "",
    description: "",
    prev_img: "",
    f_img: "",
    techs: "",
  });

  const { course_id } = useParams();

  useEffect(() => {
    try {
      axios.get(baseUrl + "/category/").then((res) => {
        setCats(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // fetch current course data
  useEffect(() => {
    // Fetch current course data
    axios
      .get(baseUrl + "/teachercourse-detail/" + course_id)
      .then((res) => {
        setCourseData({
          category: res.data.category,
          title: res.data.title,
          description: res.data.description,
          prev_img: res.data.featured_img,
          f_img: "",
          techs: res.data.techs,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [course_id]); // Make sure to include course_id in the dependency array.

  //end

  const handleChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    // Check if a file is selected
    if (event.target.files.length > 0) {
      setCourseData({
        ...courseData,
        [event.target.name]: event.target.files[0],
      });
    }
  };

  const formSubmit = () => {
    const formData = new FormData();

    formData.append("category", courseData.category);
    formData.append("teacher", 1); // You may need to replace this with the actual teacher ID.
    formData.append("title", courseData.title);
    formData.append("description", courseData.description);
    if (courseData.f_img !== null) {
      if (courseData.f_img instanceof Blob) {
        formData.append(
          "featured_img",
          courseData.f_img,
          courseData.f_img.name
        );
      }
    }

    // Append the file as a Blob to FormData.

    formData.append("techs", courseData.techs);

    axios
      .put(baseUrl + "/teachercourse-detail/" + course_id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status == 200) {
          Swal.fire({
            title: "Data has been updated",
            icon: "success",
            toast: true,
            timer: 3000,
            position: "top-right",
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
      })
      .catch((error) => {
        // Handle and log the error here
        console.error(error);

        // You can also access the response data if available
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Edit course</h5>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    onChange={handleChange}
                    value={courseData.category}
                    name="category"
                    className="form-control"
                  >
                    {cats.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    onChange={handleChange}
                    value={courseData.title}
                    type="text"
                    name="title"
                    className="form-control"
                    id="title"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    onChange={handleChange}
                    value={courseData.description}
                    type="text"
                    name="description"
                    className="form-control"
                    id="description"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="featured_img" className="form-label">
                    Featured images
                  </label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    name="f_img"
                    className="form-control"
                    id="featured_img"
                  />
                  {courseData.prev_img && (
                    <p className="mt-2">
                      {" "}
                      <img src={courseData.prev_img} width="300" />
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="techs" className="form-label">
                    Technologies
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    value={courseData.techs}
                    name="techs"
                    className="form-control"
                    id="techs"
                  />
                </div>

                <hr />
                <button
                  type="button"
                  onClick={formSubmit}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EditCourse;
