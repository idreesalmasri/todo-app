import { useState,useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../context/auth";
export default function Signin() {
//   const [registered, setRegistred] = useState(false);
//   const  renderedForm=()=>{
//     setRegistred(!registered)
//   }
const auth=useContext(LoginContext)
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const handelLogIn=(e)=>{
  e.preventDefault();
  auth.login(username,password);
}

  return (
    <>
      <When condition={!auth.registered}>
        <form style={{width:"30%" ,marginLeft:"20px" }}>
          <div className="form-group">
            <label htmlFor="User Name">User Name :</label>
            <input 
              onChange={e=>setUsername(e.currentTarget.value)}
              type="text"
              className="form-control"
              id="User Name"
              placeholder="Enter User Name"
              required
            />
            <hr></hr>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password :</label>
            <input
              onChange={e=>setPassword(e.currentTarget.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          <hr></hr>
          <button type="submit" className="btn btn-primary" onClick={handelLogIn}>
            login
          </button>
        </form>
        <hr></hr>
        <label style={{marginLeft:"20px"}}> register if you don't have an account </label><br/>
      <button type="button" onClick={auth.renderedForm} className="btn btn-outline-primary" style={{marginTop:"10px",marginLeft:"20px"}}>register</button>
      
      </When>
      
    </>
  );
}
