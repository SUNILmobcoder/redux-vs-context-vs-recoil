import React from 'react';
import { AddEmployee, EditEmployee, Home } from './components';

import './app.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/add" element={ <AddEmployee />} />
        <Route path="/edit/:id" element={ <EditEmployee />} />
      </Routes>
    </div>
  );
};

export default App;
