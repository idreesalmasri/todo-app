import {Navbar} from "@blueprintjs/core";
export default function Header(props){
    const {incomplete}=props;
    return(
        <>
        {/* document.title = `To Do List: ${incomplete}`; */}
        {/* <p style={ { backgroundColor:"#383E47" , fontWeight:"bold" , color:"white"}}>To Do List: {incomplete} items pending</p> */}
        <Navbar style={{backgroundColor:"#252A31",marginBottom:"20px",color:"#EDEFF2"}}>
            <Navbar.Group >
                <Navbar.Heading>To Do List: {incomplete} items pending</Navbar.Heading>
            </Navbar.Group>
        </Navbar>
        </>
    )
}
