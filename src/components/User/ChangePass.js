import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";




function ChangePass(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">change password</h5>
                        <div className="card-body">

                         
                        <div ClassName="mb-3 row">
                            <label for="inputPassword" ClassName="col-sm-2 col-form-label">new Password</label>
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
export default ChangePass;