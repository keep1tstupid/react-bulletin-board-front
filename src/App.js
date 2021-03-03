import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import HomeView from "./views/HomeView";
import AddItemView from "./views/AddItemView";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/home"]} component={HomeView} />
          <Route exact path="/add" component={AddItemView} />
          <Route exact path={["/items"]} component={ItemList} />
          <Route path="/items/:id" component={Item} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
