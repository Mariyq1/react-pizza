import React from "react";
import style from './Search.module.scss';
import search from "../../img/search-icon.png"



const Search = ()=>{
    return(
        <div className={style.root}>
            <img 
            src={search} 
            alt="Search icon"
            className={style.icon}/>
            <input 
            placeholder="Search sushi"
            className={style.input}
            />

        </div>
    )
}
export default Search;