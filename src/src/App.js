import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>    
      <Header></Header>
      <div className='container'>
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/movie/:imdbID' element={<MovieDetail />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      </div>
      <Footer></Footer>
      </Router>

      
    </div>
  );
}

export default App;
