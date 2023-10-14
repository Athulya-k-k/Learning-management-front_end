import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TeacherSidebar from './TeacherSidebar';
import Swal from 'sweetalert2';

const baseUrl = 'http://localhost:8000/api';

function EditChapter() {
  const [chapterData, setChapterData] = useState({
    course: '',
    title: '',
    description: '',
    prev_video: '',
    video: null, // Use null initially for the video
    remarks: '',
  });

  const { chapter_id } = useParams();

  useEffect(() => {
    axios.get(baseUrl + '/chapter/' + chapter_id)
      .then((res) => {
        setChapterData({
          course: res.data.course,
          title: res.data.title,
          description: res.data.description,
          prev_video: res.data.video,
          remarks: res.data.remarks,
          video: null, // Set video to null initially
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [chapter_id]);

  const handleChange = (event) => {
    setChapterData({
      ...chapterData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    // Check if a file is selected
    if (event.target.files.length > 0) {
      setChapterData({
        ...chapterData,
        [event.target.name]: event.target.files[0],
      });
    }
  };

  const formSubmit = () => {
    const formData = new FormData();

    formData.append('course', chapterData.course);
    formData.append('title', chapterData.title);
    formData.append('description', chapterData.description);
    if (chapterData.video !== null) {
      formData.append('video', chapterData.video, chapterData.video.name);
    }
    formData.append('remarks', chapterData.remarks);

    axios
      .put(baseUrl + '/chapter/' + chapter_id, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        if(res.status==200){
          const Swal=require('sweetalert2');

            Swal.fire({
              title:'Data has been updated',
              icon:'success',
              toast:true,
             timer:3000,
             position:'top-right',
             timerProgressBar:true,
              showConfirmButton:false
            })

        }
      
      })
      .catch((error) => {
        console.error(error);
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
          <h5 className="card-header">Update chapter</h5>
          <div className="card-body">
            <div className="mb-3 ">
              <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input type="text" value={chapterData.title} className="form-control" name='title' id="title" onChange={handleChange} />
              </div>
            </div>
            <div className="mb-3 ">
              <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <input type="text" value={chapterData.description} className="form-control" name='description' id="description" onChange={handleChange} />
              </div>
            </div>
            <div className="mb-3 ">
              <label htmlFor="video" className="col-sm-2 col-form-label">Video</label>
             
                <input type="file" className="form-control" name='video' id="video" onChange={handleFileChange} />
                {chapterData.prev_video &&
                <video controls width="100%" height='240' className="mt-2">
                      <source src={chapterData.prev_video} type="video/mp4" />
                    
                    </video>
}
            </div>
            <div className="mb-3 ">
              <label htmlFor="remarks" className="col-sm-2 col-form-label">Remarks</label>
              <div className="col-sm-10">
                <input type="text" value={chapterData.remarks} className="form-control" name='remarks' id="remarks" onChange={handleChange} />
              </div>
            </div>
            <hr />
            <button onClick={formSubmit} className="btn btn-primary">Submit</button>
          </div>
        </div>
      </section>
    </div>
  </div> 
  )
}

export default EditChapter
