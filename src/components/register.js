import { useState, useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../context/auth";
export default function Register() {
  const auth = useContext(LoginContext);
  const [userInfo,setUserInfo]=useState({
    username:"",
    password:"",
    role:"user"
  })
  const handleChange=(event)=>{
    event.preventDefault();
  setUserInfo({...userInfo,[event.target.name] : event.target.value})
  }
  const handelSubmit=(e)=>{
    e.preventDefault();
    if(userInfo.username!==""&&userInfo.username!==null&&userInfo.password!==""&&userInfo.password!==null){
      auth.signup(userInfo);
    }
  }
  return (
    <>
      <When condition={auth.registered}>
        <div style={{textAlign: "center",marginTop:"70px"}}>
        <form style={{width:"30%",marginLeft:"20px",borderStyle:"outset",borderRadius: "10px",backgroundColor: "#f2f2f2",display: "inline-block"}}>
          <div className="form-group" style={{marginBottom:"20px",fontSize: "20px"}}>
            <label htmlFor="User Name">User Name :</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              className="form-control"
              id="User Name"
              placeholder="Enter User Name"
              required
            />
          </div>
          
          <div className="form-group" style={{marginBottom:"20px"}}>
            <label htmlFor="exampleInputPassword1" style={{fontSize: "20px"}}>Password :</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          
          <label htmlFor="role" style={{fontSize: "20px"}}> Choose a role :</label>

          <select name="role" id="role" onChange={handleChange} style={{marginLeft:"20px"}}>
            <option className="btn btn-outline-primary" value="user">
              user
            </option>
            <option className="btn btn-outline-primary" value="admin">
              admin
            </option>
          </select>
          <br></br>
          
          <button type="submit" onClick={handelSubmit} className="btn btn-success" style={{marginTop:"20px"}}>
            Signup
          </button>
          <label><br/>
          <button 
          className="btn btn-primary" 
          style={{marginTop:"20px",marginLeft:"20px"}}
            type="button"
            onClick={auth.renderedForm}
          >
            login
          </button>
        </label>
        </form>
        </div>
      </When>
    </>
  );
}
