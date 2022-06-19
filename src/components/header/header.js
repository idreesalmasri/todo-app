import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Navbar } from "@blueprintjs/core";
import { LoginContext } from "../../context/auth";
import { useContext } from "react";
import { When } from "react-if";
export default function Header() {
  const auth = useContext(LoginContext);
  return (
    <Navbar
      style={{ backgroundColor: "rgb(14, 194, 226)", marginBottom: "20px" }}
    >
      <Navbar.Group>
        <Navbar.Heading >TODO_List</Navbar.Heading>
        <When condition={auth.loggedIn}>
          <label>
            <button
              style={{ marginLeft: "1350px" }}
              type="button"
              onClick={auth.logout}
              className="btn btn-danger"
            >
              logOut
            </button>
          </label>
        </When>
      </Navbar.Group>
    </Navbar>
  );
}
