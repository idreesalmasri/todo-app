import React, { useEffect, useContext } from "react";
import List from "./list.js";
import Form from "./form.js";
import { SettingContext } from "../context/setting";
import { LoginContext } from "../context/auth";
import Pagination from "./pagination";
import { When } from 'react-if';
import Header from "./header.js";
import Signin from "./signin";
import Register from "./register"
const ToDo = () => {
  const states = useContext(SettingContext);
  const state = useContext(LoginContext);

  const indexOfLastItem = states.currentPage * states.itemsPerPages;
  const indexOfFirstItem = indexOfLastItem - states.itemsPerPages;
  const currentItem = states.list.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    let incompleteCount = states.list.filter((item) => !item.complete).length;
    states.setIncomplete(incompleteCount);
  }, [states.list]);

  return (
    <>
    <When condition={state.loggedIn}>
      <div style={{ width: "70%", margin: "auto" }}>
        <Header />
        <div style={{ display: "flex" }}>
          <Form />
          <div style={{ width: "100%" }}>
            <List list={currentItem} />
          </div>
        </div>
      </div>
      <Pagination />
      </When >
      <When condition={!state.loggedIn}>
      <Signin/>
      <Register/>
      </When>
    </>
  );
};

export default ToDo;
