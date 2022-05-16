import React from 'react'
import '@blueprintjs/core/lib/css/blueprint.css';
import {Navbar} from "@blueprintjs/core";

export default function Header() {
    return (
        <Navbar style={{backgroundColor:"rgb(14, 194, 226)"}}>
            <Navbar.Group >
                <Navbar.Heading>HOME</Navbar.Heading>
            </Navbar.Group>
        </Navbar>
    )
}