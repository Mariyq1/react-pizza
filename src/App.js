import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import './scss/app.scss';
import SushiBlock from './Components/SushiBlock/SushiBlock';
import Skeleton from './Components/SushiBlock/Skeleton';


function App() {
  const [items, setItems]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    fetch('https://6403a4573bdc59fa8f2a3657.mockapi.io/items')
    .then((res)=>{
      return res.json();
    })
    .then((arr)=>{
      setItems(arr);
      setIsLoading(false);
    })
  },[])
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">All sushi</h2>
          <div className='content__items'>
          {
            isLoading ? [...new Array(6)].map((_,index)=><Skeleton key={index}/>):
            items.map((obj)=><SushiBlock key={obj.id} {...obj}/>)
          }
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default App;
