import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Work from '../../pages/Work';
import Category from '../../pages/Category';
import Search from '../../pages/Search';
import Navbar from '../Navbar';
import SearchButton from '../SearchButton';
import './style.sass';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchButton />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work/:id" component={Work} />
        <Route path="/category/:categoryName" component={Category} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
