import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function AddCourses() {
  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    category: "",
    title: "",
    description: "",
    f_img: "",
    techs: "",
  });

  useEffect(() => {
    try {
      axios.get(baseUrl + "/category/").then((res) => {
        setCats(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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

    // Append the file as a Blob to FormData.
    if (courseData.f_img instanceof Blob) {
      formData.append("featured_img", courseData.f_img, courseData.f_img.name);
    }

    formData.append("techs", courseData.techs);

    axios
      .post(baseUrl + "/course/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        window.location.href = "/addcourses";
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
            <h5 className="card-header">Add course</h5>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    onChange={handleChange}
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
                </div>

                <div className="mb-3">
                  <label htmlFor="techs" className="form-label">
                    Technologies
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
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

export default AddCourses;
