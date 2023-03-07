import React from "react";
import style from "./Pagination.module.scss";
import ReactPaginate from 'react-paginate';

const Pagination = ({onChangePage})=>{
    return(
        <div className={style.root}>
            <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={event=>onChangePage(event.selected+1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />

        </div>
    )
}
export default Pagination;