import React from 'react'
import { Link } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const baseUrl='http://localhost:8000/api'

function CourseChapter() {
  const[chapterData,setChapterData]=useState([]);
  const[totalresults,setTotalResults]=useState([]);
  const {course_id}=useParams()

    useEffect(()=>{
        try{
        axios.get(baseUrl+'/coursechapters/'+course_id)
        .then((res)=>{
          setTotalResults(res.data.length)
            setChapterData(res.data)
        })
    }catch(error){
        console.log(error);
    }
},[]);
console.log(chapterData);

const Swal=require('sweetalert2');
const handleDeleteClick=()=>{
  Swal.fire({
    title:'confirm',
    text:'Are you sure you want to delete this',
    icon:'info',
    confirmButtonText:'Continue',
    showCancelButton:true
  })

}

  return (
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <TeacherSidebar/>

        </aside>
        <section className='col-md-9'>
          <div className='card'>
            <div className='card-header'>all chapter({totalresults})</div>
            <div className='card-body'>
            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Tiltle</th>
                                        <th>video</th>
                                        <th>remarks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
  {chapterData.map((chapter, index) => (
    <tr key={index}>
      <td><Link to={`/editchapter`+chapter.id}>{chapter.title}</Link></td>
      <td>
        <video controls width='250'>
        
          <source src={chapter.video.url} type='video/webm' />
          <source src={chapter.video.url} type='video/mp4' />
        </video>
      </td>
      <td>{chapter.remarks}</td>
      <td>
        <Link onClick={handleDeleteClick} className="btn btn-danger btn-sm"><i class="bi bi-trash"></i></Link>
        <Link to={`/editchapter/`+chapter.id}  className="btn btn-info btn-sm ms-1 text-white"><i class="bi bi-pencil-square"></i></Link>
      </td>
    </tr>
  ))}
</tbody>

                            </table>

            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default CourseChapter
