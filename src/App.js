import './App.css';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import './scss/app.scss';
import SushiBlock from './Components/SushiBlock';

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
          <SushiBlock title="Maki Salmon" price={30}/>
          <SushiBlock title="Maki" price={15}/>
          <SushiBlock title="Nigiri Salmon" price={40}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default App;
