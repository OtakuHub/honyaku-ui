import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Work from '../../pages/Work';
import Category from '../../pages/Category';
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
        <Route path="/work/:id" component={Work} />
        <Route path="/category/:categoryName" component={Category} />
      </Switch>
    </div>
  );
}

export default App;
