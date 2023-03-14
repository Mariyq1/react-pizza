import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchContext } from "../App";
import Categories from "../Components/Categories";
import Pagination from "../Components/Pagination";
import Sort, { list } from "../Components/Sort";
import Skeleton from "../Components/SushiBlock/Skeleton";
import SushiBlock from "../Components/SushiBlock/SushiBlock";
import { selectFilter, setCategoryId, setCurrentPage,setFilters } from "../redux/slices/filterSlice";
import qs from 'qs';
import { useNavigate } from "react-router-dom";
import { fetchSushi, selectSushiData } from "../redux/slices/sushiSlice";

export const Home = ()=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);
  const {items, status} = useSelector(selectSushiData);
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const onChangeCategory = (id)=>{dispatch(setCategoryId(id));}
  const onChangePage =(number) =>{
    dispatch(setCurrentPage(number));
  }

  const getSushi = async ()=>{
      const sortBy= sort.sortProperty.replace('-', '');
      const order = sort.sortProperty.includes('-') ? 'asc':'desc';
      const category = categoryId >0? `category=${categoryId}` : '';
      const search = searchValue ? `&search=${searchValue}`:'';
      dispatch(fetchSushi({
        sortBy, order,category,search,currentPage
      }));
         window.scrollTo(0,0);
  }


  useEffect(()=>{
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1))
      const sort = list.find((obj)=>obj.sortProperty === params.sortProperty)
      
      dispatch(
        setFilters({
          ...params,
          sort
        })
      )
    isSearch.current = true;
    }
  },[])
  useEffect(()=>{
    getSushi();
    },[categoryId,sort.sortProperty,searchValue,currentPage])
    
    
    
    useEffect(()=>{
      if(isMounted.current){
        const querryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage
      });
      navigate(`?${querryString}`)
      }isMounted.current = true;
      
    },[categoryId, sort.sortProperty, currentPage])
    
    
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
            <Categories value={categoryId} onClickCategory={onChangeCategory}/>
            <Sort />
          </div>
          <h2 className="content__title">All sushi</h2>
         
          {status === 'error' ? (
            <div>
              <h2>Error</h2>
              <p>Error. Something is wrong. We can't open page</p>
            </div>
          ):
            (<div className='content__items'>{status === 'loading' ? skeleton: sushi}</div>)
          }
       
          <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    )

}