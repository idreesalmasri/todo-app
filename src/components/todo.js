import React, { useEffect, useState } from 'react';
import List from './list.js';
import Form from './form.js';
import Pagination from './pagination';
import { v4 as uuid } from 'uuid';
import Header from './header.js';
const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [itemsPerPages,setItemPerPages]=useState(3);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  function addItem(item) {
    console.log(item);
    item.id = uuid();
    // console.log(item.id);
    item.complete = false;
    setList([...list, item]);
    // console.log("list",list);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }
const indexOfLastItem=currentPage*itemsPerPages;
const indexOfFirstItem=indexOfLastItem-itemsPerPages;
const currentItem=list.slice(indexOfFirstItem,indexOfLastItem);
  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    // document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <div style={{width:"70%", margin:"auto"}}>
      <Header incomplete={incomplete} />
      <div style={{display:"flex"}}> 
      <Form addItem={addItem}/>
      <div style={{width:"100%"}}>
      <List toggleComplete={toggleComplete} list={currentItem} incomplete={incomplete} deleteItem={deleteItem}/>
      </div>
      </div>
      </div>
      <Pagination totalItems={list.length } itemsPerPages={itemsPerPages} paginate={paginate} />
    </>
  );
};

export default ToDo;