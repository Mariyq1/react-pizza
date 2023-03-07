import React, { useEffect, useState } from "react";
import { SearchContext } from "../App";
import Categories from "../Components/Categories";
import Pagination from "../Components/Pagination";
import Sort from "../Components/Sort";
import Skeleton from "../Components/SushiBlock/Skeleton";
import SushiBlock from "../Components/SushiBlock/SushiBlock";


export const Home = ()=>{
    const {searchValue} = React.useContext(SearchContext);
    const [items, setItems]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortType, setSortType] = useState({
      name:'popular',
      sortProperty:'rating'
    });
        useEffect(()=>{
            setIsLoading(true);
            fetch(`https://6403a4573bdc59fa8f2a3657.mockapi.io/items?page=${currentPage}&limit=4&${categoryId>0?`category=${categoryId}`:''}&sortBy=${sortType.sortProperty}&order=desc`)
            .then((res)=>{
            return res.json();
         })
            .then((arr)=>{
            setItems(arr);
            setIsLoading(false);
         })
         window.scrollTo(0,0);
    },[categoryId,sortType,currentPage])
    const sushi = items.filter((obj)=>{
      if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){
        return true;
      }
        return false;
    })
    .map((obj)=><SushiBlock key={obj.id} {...obj}/>);
    const skeleton =[...new Array(6)].map((_,index)=><Skeleton key={index}/>);
    return (
        <div className="container">
        <div className="content__top">
            <Categories value={categoryId} onClickCategory={(i)=>setCategoryId(i)}/>
            <Sort value={sortType} onChangeSort={(i)=>setSortType(i)}/>
          </div>
          <h2 className="content__title">All sushi</h2>
          <div className='content__items'>
          {
            isLoading ? skeleton: sushi
          }
          </div>
          <Pagination onChangePage={(number) =>setCurrentPage(number)}/>
        </div>
    )

}