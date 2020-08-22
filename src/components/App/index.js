import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import './style.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
