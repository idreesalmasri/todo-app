import {Navbar} from "@blueprintjs/core";
import { SettingContext } from "../context/setting";
import { useContext } from "react";
export default function Header(){
    const states = useContext(SettingContext);
    return(
        <>
        <Navbar style={{backgroundColor:"#252A31",marginBottom:"20px",color:"#EDEFF2"}}>
            <Navbar.Group >
                <Navbar.Heading>To Do List: {states.incomplete} items pending</Navbar.Heading>
            </Navbar.Group>
        </Navbar>
        </>
    )
}
