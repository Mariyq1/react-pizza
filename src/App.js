import './App.css';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import './scss/app.scss';
import SushiBlock from './Components/SushiBlock';
import sushi from './assets/sushi.json';

function App() {
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
            sushi.map((obj)=>(
              <SushiBlock 
              title={obj.title}
              price={obj.price}
              imageURL={obj.imageURL}
              size={obj.size}
              types={obj.types}
              category={obj.category}
              
              />
            ))
          }
          
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default App;
