import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Private from './components/Private';
import Public from './components/Public';

import './App.css';


const App = ()  => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">public</Link></li>
            <li><Link to="/private">Private</Link> </li>
          </ul>
          <Routes>
            <Route path='/' element={<Public />} />
            <Route path='/private' element={<Private />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
