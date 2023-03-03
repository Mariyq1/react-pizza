import './App.css';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Sort from './Components/Sort';
import './scss/app.scss';
import SushiBlock from './Components/SushiBlock';


function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header/>
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 class="content__title">All sushi</h2>
          <SushiBlock/>
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default App;
