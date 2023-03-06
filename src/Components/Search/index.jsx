import React from "react";
import style from './Search.module.scss';
import search from "../../img/search-icon.png";
import close from "../../img/close-icon.png"



const Search = ({searchValue, setSearchValue})=>{
    return(
        <div className={style.root}>
            <img 
            src={search} 
            alt="Search icon"
            className={style.icon}/>
            <input 
            value={searchValue}
            onChange={(event)=>setSearchValue(event.target.value)}
            placeholder="Search sushi"
            className={style.input}
            />
            {
                searchValue && (
                    <img src={close} 
                        alt="Close Icon" 
                        className={style.close} 
                        onClick={()=> setSearchValue('')}/>
            )}
        </div>
    )
}
export default Search;