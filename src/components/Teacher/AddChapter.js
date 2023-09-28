import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";



function AddChapter(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Add chapter</h5>
                        <div className="card-body">

                          <div ClassName="mb-3 row">
                            <label for="staticEmail" ClassName="col-sm-2 col-form-label">title</label>
                            <div ClassName="col-sm-10">
                            <input type="text"  ClassName="form-control" id="staticEmail" />
                            </div>
                        </div>
                          <div ClassName="mb-3 row">
                            <label for="" ClassName="col-sm-2 col-form-label">Description</label>
                            <div ClassName="col-sm-10">
                            <input type="text"  ClassName="form-control" id="staticEmail" value='athulya'/>
                            </div>
                        </div>
                          <div ClassName="mb-3 row">
                            <label for="" ClassName="col-sm-2 col-form-label">video</label>
                            <div ClassName="col-sm-10">
                            <input type="file"  ClassName="form-control" id="staticEmail" />
                            </div>
                        </div>
                        <div ClassName="mb-3 row">
                            <label for="inputPassword" ClassName="col-sm-2 col-form-label">Remarks</label>
                            <div ClassName="col-sm-10">
                            <input type="text" ClassName="form-control" id="inputPassword"/>
                            </div>
                        </div>
                       
                        <hr/>
                           <buton className="btn btn-primary">submit</buton>
                        
                            </div>
                            </div>
                        </section>
                
            </div>

        </div>
       
    )

}
export default AddChapter;