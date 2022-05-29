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
        <form style={{width:"30%",marginLeft:"20px"}}>
          <div className="form-group">
            <label htmlFor="User Name">User Name</label>
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
          <hr></hr>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
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
          <hr></hr>
          <label htmlFor="role"> Choose a role :</label>

          <select name="role" id="role" onChange={handleChange}>
            <option className="btn btn-outline-primary" value="user">
              user
            </option>
            <option className="btn btn-outline-primary" value="admin">
              admin
            </option>
          </select>
          <br></br>
          <hr></hr>
          <button type="submit" onClick={handelSubmit} className="btn btn-primary">
            Signup
          </button>
        </form>
        <hr></hr>
        <label>
          <button style={{marginLeft:"20px" }}
            type="button"
            onClick={auth.renderedForm}
            className="btn btn-outline-primary"
          >
            login
          </button>
        </label>
      </When>
    </>
  );
}
