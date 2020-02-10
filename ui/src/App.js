import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Movie from './containers/Movies'
import Categories from './containers/Categories';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/movies" exact component={Movie}/>
        <Route path="/categories" exact component={Categories}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
