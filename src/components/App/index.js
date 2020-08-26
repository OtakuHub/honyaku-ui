import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Work from '../../pages/Work';
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
      </Switch>
    </div>
  );
}

export default App;
