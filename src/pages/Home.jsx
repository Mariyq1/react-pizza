import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchContext } from "../App";
import Categories from "../Components/Categories";
import Pagination from "../Components/Pagination";
import Sort from "../Components/Sort";
import Skeleton from "../Components/SushiBlock/Skeleton";
import SushiBlock from "../Components/SushiBlock/SushiBlock";
import { setCategoryId } from "../redux/slices/filterSlice";
import axios from "axios";

export const Home = ()=>{
  const dispatch = useDispatch();
  const {categoryId, sort} = useSelector(state=> state.filter);
  const {searchValue} = React.useContext(SearchContext);
  const [items, setItems]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const onChangeCategory = (id)=>{
       dispatch(setCategoryId(id));}
    useEffect(()=>{
      setIsLoading(true);
      const sortBy= sort.sortProperty.replace('-', '');
      const order = sort.sortProperty.includes('-') ? 'asc':'desc';
      const category = categoryId >0? `category=${categoryId}` : '';
      const search = searchValue ? `&search=${searchValue}`:'';
      axios.get(`https://6403a4573bdc59fa8f2a3657.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then((res)=>{
        setItems(res.data);
        setIsLoading(false);
      });
         window.scrollTo(0,0);
    },[categoryId,sort.sortProperty,currentPage, searchValue])
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
          <div className='content__items'>
          {
            isLoading ? skeleton: sushi
          }
          </div>
          <Pagination onChangePage={(number) =>setCurrentPage(number)}/>
        </div>
    )

}