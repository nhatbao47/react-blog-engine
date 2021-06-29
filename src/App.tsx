import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/categories' component={Categories} />
          <Route path='/posts' component={Posts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
