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
        <div style={{textAlign: "center",marginTop:"70px"}}>
        <form style={{width:"30%",marginLeft:"20px",borderStyle:"outset",borderRadius: "10px",backgroundColor: "#f2f2f2", display: "inline-block"}}>
          <div className="form-group" style={{marginBottom:"20px"}}>
            <label htmlFor="User Name" style={{fontSize: "20px"}}>User Name :</label>
            <input 
              onChange={e=>setUsername(e.currentTarget.value)}
              type="text"
              className="form-control"
              id="User Name"
              placeholder="Enter User Name"
              required
            />
            
          </div>
          <div className="form-group" style={{marginBottom:"20px"}}>
            <label htmlFor="exampleInputPassword1" style={{fontSize: "20px"}}>Password :</label>
            <input
              onChange={e=>setPassword(e.currentTarget.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-success" onClick={handelLogIn} style={{marginBottom:"20px"}}>
            login
          </button>
          <br/>
        <label style={{fontSize: "20px"}}> register if you don't have an account </label><br/>
      <button type="button" onClick={auth.renderedForm} className="btn btn-primary" style={{marginTop:"10px"}}>register</button>
        </form>
        </div>
      
      </When>
      
    </>
  );
}
