import {Navbar} from "@blueprintjs/core";
export default function Header(props){
    const {incomplete}=props;
    return(
        <>
        
        <Navbar style={{backgroundColor:"#252A31",marginBottom:"20px",color:"#EDEFF2"}}>
            <Navbar.Group >
                <Navbar.Heading>To Do List: {incomplete} items pending</Navbar.Heading>
            </Navbar.Group>
        </Navbar>
        </>
    )
}
