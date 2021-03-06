import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantListPage from './pages/RestaurantListPage';
import RestaurantViewPage from './pages/RestaurantViewPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div>
      <header>
        <h1><Link to="/">헤더</Link></h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantListPage} />
        <Route path="/restaurants/:id" component={RestaurantViewPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
