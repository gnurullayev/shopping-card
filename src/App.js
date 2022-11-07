import './App.css';
import BreadCrumb from './components/breadcrumb/BreadCrumb';
import GoodsList from './components/goodsList/GoodsList';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="containers">
        <div className="box">
            <div className="menu">
              <Menu/>
            </div>

            <div className="">
              <BreadCrumb/>
              
              <GoodsList/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
