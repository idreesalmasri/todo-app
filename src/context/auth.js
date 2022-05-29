import React, { useEffect, useState } from "react";
import base64 from 'base-64';
import superagent from 'superagent';
import jwt from 'jwt-decode';
import cookie from 'react-cookies';
import swal from 'sweetalert';


const API = `https://idrees-osama-project1-auth-api.herokuapp.com`;
export const LoginContext = React.createContext();

export default function LoginProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [registered, setRegistred] = useState(false);
    
    const  renderedForm=()=>{
        setRegistred(!registered)
      }
    // Basic encoded(username:password) >> Basic eW=hdtgsjs
    const login = async (username, password) => {
        // localhost:3030/signin
        const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
        console.log('inside login >> response', response);//userInfo + token
        validateMyUser(response.body)
    }
    const signup=async(user)=>{
        console.log(user);
        const response=await superagent.post(`${API}/signup`).send(user);
        if(response.status===201){
            console.log(response.status);
            swal("Good job!", "You signed up correctly, please log in now ", "success");
            renderedForm();
        }
        
    }
    const validateMyUser = (data) => {
        if (data) {
            const validUser = jwt(data.token);
            if (validUser) {
                setLoginstate(true, data);
                cookie.save('userData', data);
            } else {
                setLoginstate(false, {})
            }
        } else {
            setLoginstate(false, {})
        }

    }

    const setLoginstate = (isLogged, userData) => {
        setLoggedIn(isLogged);
        setUser(userData);
    }

    const logout = () => {
        setLoggedIn(false);
        setUser({});
        cookie.remove('userData');
    }

    useEffect(() => {
        const myUserInfo = cookie.load('userData');
        validateMyUser(myUserInfo);
    }, [])


    const canDo = (capability) => {
        // optional chaining 
        return user?.actions?.includes(capability);
    }

    const state = {
        loggedIn: loggedIn,
        user: user,
        login: login,
        logout: logout,
        canDo: canDo,
        registered:registered,
        setRegistred:setRegistred,
        renderedForm:renderedForm,
        signup:signup
    }


    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}