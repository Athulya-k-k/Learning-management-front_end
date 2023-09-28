import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseUrl = 'http://127.0.0.1:8000/api';

function AddChapter() {
  const [chapterData, setChapterData] = useState({
    title: '',
    description: '',
    video: null, // Use null initially
    remarks: ''
  });

  const handleChange = (event) => {
    setChapterData({
      ...chapterData,
      [event.target.name]: event.target.value
    });
  }

  const handleFileChange = (event) => {
    // Check if a file is selected
    if (event.target.files.length > 0) {
      setChapterData({
        ...chapterData,
        [event.target.name]: event.target.files[0]
      });
    }
  }
  const {course_id}=useParams()
  const formSubmit = () => {
    const formData = new FormData();
   
    formData.append('course',course_id); // You may need to replace this with the actual course ID.
    formData.append('title', chapterData.title);
    formData.append('description', chapterData.description);
    
    // Append the file as a Blob to FormData.
    if (chapterData.video instanceof Blob) {
      formData.append('video', chapterData.video, chapterData.video.name);
    }

    formData.append('remarks', chapterData.remarks);

    axios.post(baseUrl + '/chapter/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        window.location.href = '/addchapter/1'; // Redirect to the course page
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
            <h5 className="card-header">Add chapter</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" name='title' id="title" onChange={handleChange} />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" name='description' id="description" onChange={handleChange} />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="video" className="col-sm-2 col-form-label">Video</label>
                <div className="col-sm-10">
                  <input type="file" className="form-control" name='video' id="video" onChange={handleFileChange} />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="remarks" className="col-sm-2 col-form-label">Remarks</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" name='remarks' id="remarks" onChange={handleChange} />
                </div>
              </div>
              <hr />
              <button onClick={formSubmit} className="btn btn-primary">Submit</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddChapter;
