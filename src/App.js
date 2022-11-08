import { Route, Routes} from 'react-router-dom';
import './App.css';
import GoodsDetalis from './components/goadsDatails/GoodsDetalis';
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
              <Routes>
                <Route path='/checkout' element={<GoodsList/>}/>
                <Route path='/checkout/:id' element={<GoodsDetalis/>}/>
              </Routes>

            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
