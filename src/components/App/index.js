import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Navbar from '../Navbar';
import Search from '../Search';
import './style.sass';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
