
import React from "react";
import { useContext } from "react";
import { SettingContext } from '../context/setting'

const Pagination=({totalItems,paginate,currentPage})=>{
  const states = useContext(SettingContext)
const pageNumber=[];
for (let i = 1; i <= Math.ceil(totalItems / states.itemsPerPages); i++) {
    pageNumber.push(i);
  }
  return(
<nav>
      <ul className='pagination' style={{ position: "absolute", right: "50%" }}>
      <li className="page-item">
        <a className="page-link" href="/#" onClick={() =>currentPage>1? paginate(currentPage-1):null} style={{backgroundColor:"blue",color:"white"}}>Previous</a>
      </li>
        {pageNumber.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='/!#' className='page-link'>
              {number}
            </a>
          </li>
          
        ))}
        <li className="page-item"><a className="page-link" href="/#" onClick={() =>currentPage<(Math.ceil(totalItems / states.itemsPerPages))? paginate(currentPage+1):null} style={{backgroundColor:"blue",color:"white"}}>Next</a></li>
      </ul>
    </nav>
  )
}
export default Pagination;