import React, { useEffect, useContext } from "react";
import List from "./list.js";
import Form from "./form.js";
import { SettingContext } from "../context/setting";
import Pagination from "./pagination";
import Header from "./header.js";
const ToDo = () => {
  const states = useContext(SettingContext);

  const paginate = (pageNumber) => states.setCurrentPage(pageNumber);

  const indexOfLastItem = states.currentPage * states.itemsPerPages;
  const indexOfFirstItem = indexOfLastItem - states.itemsPerPages;
  const currentItem = states.list.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    let incompleteCount = states.list.filter((item) => !item.complete).length;
    states.setIncomplete(incompleteCount);
    // document.title = `To Do List: ${incomplete}`;
  }, [states.list]);

  return (
    <>
      <div style={{ width: "70%", margin: "auto" }}>
        <Header/>
        <div style={{ display: "flex" }}>
          <Form />
          <div style={{ width: "100%" }}>
            <List list={currentItem} />
          </div>
        </div>
      </div>
      <Pagination
        totalItems={states.list.length}
        paginate={paginate}
        currentPage={states.currentPage}
      />
    </>
  );
};

export default ToDo;
