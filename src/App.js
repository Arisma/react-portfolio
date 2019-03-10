import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import NotFound from "./Components/NotFound";

import Navbar from"./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Index";
import Modal from "./Components/Products/Modal";
import ProductList from "./Components/Products/List";
import Details from "./Components/Products/Details";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route exact path="/" component={ProductList} />
        <Route component={NotFound} />
      </Switch>
      <Modal />
    </React.Fragment>
    );
  }
}

export default App;
