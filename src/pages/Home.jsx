import React, { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import Skeleton from "../Components/SushiBlock/Skeleton";
import SushiBlock from "../Components/SushiBlock/SushiBlock";

export const Home = ()=>{
    const [items, setItems]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
      name:'popular',
      sortProperty:'rating'
    });
        useEffect(()=>{
            setIsLoading(true);
            fetch(`https://6403a4573bdc59fa8f2a3657.mockapi.io/items?${categoryId>0?`category=${categoryId}`:''}&sortBy=${sortType.sortProperty}&order=desc`)
            .then((res)=>{
            return res.json();
         })
            .then((arr)=>{
            setItems(arr);
            setIsLoading(false);
         })
         window.scrollTo(0,0);
    },[categoryId,sortType])
    return (
        <div className="container">
        <div className="content__top">
            <Categories value={categoryId} onClickCategory={(i)=>setCategoryId(i)}/>
            <Sort value={sortType} onChangeSort={(i)=>setSortType(i)}/>
          </div>
          <h2 className="content__title">All sushi</h2>
          <div className='content__items'>
          {
            isLoading ? [...new Array(6)].map((_,index)=><Skeleton key={index}/>):
            items.map((obj)=><SushiBlock key={obj.id} {...obj}/>)
          }
          </div>
        </div>
    )

}