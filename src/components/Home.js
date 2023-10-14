import { Link } from "react-router-dom";
import AllCourses from "./AllCourses";

function Home() {
  return (
   <div className="container mt-5">
    {/* latest courses */}
    <h3 className="pb-1 mb-4">Latest Courses<Link to="/allcourses" className="float-end">see all</Link></h3>
     <div className="row mb-4">
        <div className="col-md-3">
         <div className="card" >
          <Link to="/detail/1">
            <img src="python.png" className="card-img-top" alt="..."/>
          </Link>
          <div className="card-body">
            <h5 className="card-title">
                <Link to="/detail/1">Course title</Link>
            </h5>
         </div>
        
        </div>
        </div>
        <div className="col-md-3">
         <div className="card" >
          <a href="#"><img src="python.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
           
         </div>
         
        </div>
        </div>
        <div className="col-md-3">
         <div className="card" >
          <a href="#"><img src="python.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
           
            
         </div>
        </div>
        </div>
        <div className="col-md-3">
         <div className="card" >
          <a href="#"><img src="python.png" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
            

         </div>
        </div>
        </div>


        
      </div>
      {/*end latest */}
         {/* popular courses courses */}
  
    <h3 className="pb-1 mb-4">Popular Courses<Link to="/popularcourses" className="float-end">see all</Link></h3>
     <div className="row mb-4">
        <div className="col-md-3">
         <div className="card" >
          <a href="#"><img src="django.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
            
            <div className="card-footer">
            <div className="title">
                <span>Rating:4/5</span>
                <span className="float-end">views:789</span>
                </div>
         </div>
         </div>
        </div>
        </div>
        <div className="col-md-3">
         <div className="card" >
          <a href="#"><img src="django.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
            <div className="card-footer">
            <div className="title">
                <span>Rating:4/5</span>
                <span className="float-end">views:789</span>
                </div>
         </div>
            
         </div>
        </div>
        </div>
        <div className="col-md-3">
         <div className="card" >
          <a href="#"><img src="django.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
            
            <div className="card-footer">
            <div className="title">
                <span>Rating:4/5</span>
                <span className="float-end">views:789</span>
                </div>
         </div>
         </div>
        </div>
        </div>
        <div className="col-md-3">
         <div className="card" >
          <a href="#"><img src="django.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
            <div className="card-footer">
            <div className="title">
                <span>Rating:4/5</span>
                <span className="float-end">views:789</span>
                </div>
         </div>
            
         </div>
        </div>
        </div>


        
      </div>
      <h3 className="pb-1 mb-4">Popular Teachers<Link to="/popularteachers" className="float-end">see all</Link></h3>
     
     <div className="row">
        <div className="col-md-3">
         <div className="card" >
          <a href="#"><img src="teacher.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><Link to="/teacherdetail/:teacher_id">Teacher Name</Link></h5>
         </div>
         <div className="card-footer">
            <div className="title">
                <span>Rating:4/5</span>
                <span className="float-end">views:789</span>
                </div>
         </div>
        </div>
        </div>
        <div className="col-md-3">
         <div className="card" >
          <a href="#"><img src="teacher.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><Link to="/teacherdetail/:teacher_id">Teacher Name</Link></h5>
         </div>
         <div className="card-footer">
            <div className="title">
                <span>Rating:4/5</span>
               
                </div>
         </div>
        </div>
        </div>
        <div className="col-md-3">
         <div className="card" >
          <a href="#"><img src="teacher.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><Link to="/teacherdetail/:teacher_id">Teacher Name</Link></h5>
         </div>
         <div className="card-footer">
            <div className="title">
                <span>Rating:4/5</span>
              
                </div>
         </div>
        </div>
        </div>
        <div className="col-md-3">
         <div className="card" >
          <a href="#"><img src="teacher.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><Link to="/teacherdetail/:teacher_id">Teacher Name</Link></h5>
            
            
         </div>
         <div className="card-footer">
            <div className="title">
                <span>Rating:4/5</span>
             
                </div>
         </div>
        </div>
        </div>


        
      </div>
      {/*end latest */}
      <h3 className="pb-1 mb-4 my-4 ">Student Testimonial<a href="#" className="float-end">see all</a></h3>
     
          {/* Add the carousel here */}
          <div id="carouselExampleIndicators1" className="carousel slide bg-dark text-white py-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
                </figure>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* End of carousel */}
        </div>
   

       
   
  );
}

export default Home;
