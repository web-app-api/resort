import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Service from "./pages/Service";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";


import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
  <>
  <Navbar />
  <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/Service/" component={Service} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
  </>
)
}

export default App;
