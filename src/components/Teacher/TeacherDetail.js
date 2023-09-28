import React from 'react'
import { Link } from 'react-router-dom'

function TeacherDetail() {
  return (
    <div className="container mt-3">
    <div className="row">
        <div className="col-4">
            <img src="/logo512.png" className="img-thumbnail" alt="teacher"/>
        </div>
        <div className="col-8">
            <h3>athulya</h3>
            <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content.</p>
            <p className="fw-bold">skills:<Link to="/category/php">php</Link>,<Link to="/category/php">c</Link></p>
            <p className="fw-bold">recent courses:<Link to="/category/php">php</Link></p>
 
            <p className="fw-bold">Rating:4/5</p>
        </div>
    </div>
        {/* course videos */}
        <div className="card mt-4" >
        
            <h3 className='card-header'>course list</h3>
            <div className='list-group list-group-flush'>
                <Link to='/detail/1' className='list-group-item'>java</Link>
            </div>
         </div>
      
        </div>
      
  


  )
}

export default TeacherDetail





