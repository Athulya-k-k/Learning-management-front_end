import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";



function TeacherProfile(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                  <TeacherSidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile Setting</h5>
                        <div className="card-body">

                          <div ClassName="mb-3 row">
                            <label for="staticEmail" ClassName="col-sm-2 col-form-label">Email</label>
                            <div ClassName="col-sm-10">
                            <input type="text"  ClassName="form-control" id="staticEmail" value="email@example.com"/>
                            </div>
                        </div>
                          <div ClassName="mb-3 row">
                            <label for="" ClassName="col-sm-2 col-form-label">fullname</label>
                            <div ClassName="col-sm-10">
                            <input type="text"  ClassName="form-control" id="staticEmail" value='athulya'/>
                            </div>
                        </div>
                          <div ClassName="mb-3 row">
                            <label for="" ClassName="col-sm-2 col-form-label">profile picture</label>
                            <div ClassName="col-sm-10">
                            <input type="file"  ClassName="form-control" id="staticEmail" />
                            </div>
                        </div>
                        <div ClassName="mb-3 row">
                            <label for="inputPassword" ClassName="col-sm-2 col-form-label">interest</label>
                            <div ClassName="col-sm-10">
                            <input type="text" ClassName="form-control" id="inputPassword"/>
                            </div>
                        </div>
                        <div ClassName="mb-3 row">
                            <label for="inputPassword" ClassName="col-sm-2 col-form-label">Password</label>
                            <div ClassName="col-sm-10">
                            <input type="password" ClassName="form-control" id="inputPassword"/>
                            </div>
                        </div>
                        <hr/>
                           <buton className="btn btn-primary">Update</buton>
                        
                            </div>
                            </div>
                        </section>
                
            </div>

        </div>
       
    )

}
export default TeacherProfile;