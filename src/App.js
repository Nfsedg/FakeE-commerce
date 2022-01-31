import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Provider } from './context/newContext';
import { ProductsByCategorie } from './pages/ProductsByCategorie';
import { ProductDetail } from './pages/ProductDetail';
import { Header } from './components/Header/index';
import { Home } from './pages/Home'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Provider>
        <HashRouter>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/product/:category" element={<ProductsByCategorie/>}/>
            <Route path="/item/:itemId" element={<ProductDetail/>}/>
          </Routes>
        </HashRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
