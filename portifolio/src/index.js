import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

ReactDOM.render(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<App/>}/>
    </Routes>
    <Footer/>
  </Router>,

  document.getElementById('root')
);
