import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import MapContainer from './components/Map/Map';
import Modal from './components/Modal/Modal';
import Landing from './components/Landing/Landing';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => (
  <Router>
    <div>
      <Modal />
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/map" component={MapContainer} />
        <Route path="/detail/:placeId" component={Sidebar} />
      </Switch>
    </div>
  </Router>
);

export default App;
