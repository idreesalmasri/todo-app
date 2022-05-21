
import React, { useEffect,useContext } from 'react';
import List from './list.js';
import Form from './form.js';
import { SettingContext } from '../context/setting'
import Pagination from './pagination';
import { v4 as uuid } from 'uuid';
import Header from './header.js';
const ToDo = () => {
  const states = useContext(SettingContext);
  let stringfiedData;
  const paginate = pageNumber => states.setCurrentPage(pageNumber);
   function addItem(item) {
    item.id = uuid();
    item.complete = false;
    states.setList([...states.list, item]);
    // console.log(item);
    stringfiedData=JSON.stringify([...states.list, item]);
        localStorage.setItem("list",stringfiedData)
  }
  function itemPerPage(e){
    states.setItemPerPages(e.target.value)
  }
  function showComleteToggle(){
      states.setShowComplete(!states.showComplete);
      console.log(states.showComplete);
    }
  function deleteItem(id) {
    const items = states.list.filter( item => item.id !== id );
    states.setList(items);
        stringfiedData=JSON.stringify(items);
        localStorage.setItem("list",stringfiedData);
  }
  
  function toggleComplete(id) {

    const items = states.list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
        stringfiedData=JSON.stringify([...states.list]);
        localStorage.setItem("list",stringfiedData)
      }
      return item;
    });

    states.setList(items);

  }
  

const indexOfLastItem=states.currentPage*states.itemsPerPages;
const indexOfFirstItem=indexOfLastItem-states.itemsPerPages;
const currentItem=states.list.slice(indexOfFirstItem,indexOfLastItem);


  useEffect(() => {
    let incompleteCount = states.list.filter(item => !item.complete).length;
    states.setIncomplete(incompleteCount);
    // document.title = `To Do List: ${incomplete}`;
  }, [states.list]);

  return (
    <>
      <div style={{width:"70%", margin:"auto"}}>
      <Header incomplete={states.incomplete} />
      <div style={{display:"flex"}}> 
      <Form addItem={addItem} />
      <div style={{width:"100%"}}>
      <List toggleComplete={toggleComplete} list={currentItem}  deleteItem={deleteItem} />
      </div>
      </div>
      </div>
      <Pagination totalItems={states.list.length }  paginate={paginate} currentPage={states.currentPage} />
    </>
  );
};


export default ToDo;