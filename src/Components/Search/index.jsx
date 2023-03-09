import React, { useState } from "react";
import style from './Search.module.scss';
import search from "../../img/search-icon.png";
import close from "../../img/close-icon.png"
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";


const Search = ()=>{
    const [value, setValue]=useState('');
    const {setSearchValue} = React.useContext(SearchContext);
    const inputRef = React.useRef();
    
    const onClickClear = ()=>{
        setSearchValue('');
        setValue('');
        inputRef.current.focus();
    }
    const updateSearchValue = React.useCallback(
        debounce((str)=>{
           setSearchValue(str);
        }, 1000),
        [],)
    const onChangeInput = event =>{
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }
    
    return(
        <div className={style.root}>
            <img 
            src={search} 
            alt="Search icon"
            className={style.icon}/>
            <input 
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            placeholder="Search sushi"
            className={style.input}
            />
            {value && (
                    <img src={close} 
                        alt="Close Icon" 
                        className={style.close} 
                        onClick={onClickClear}/>
            )}
        </div>
    )
}
export default Search;