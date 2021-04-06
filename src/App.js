import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginView from "./views/common/LoginView";
import HomeView from "./views/common/HomeView";
import ModerateItemView from "./views/moderator/ModerateItemView";
import MyItemsView from "./views/common/MyItemsView";
import UsersListView from "./views/admin/UsersListView";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={["/login", "/"]} component={LoginView}/>
          <Route exact path="/home" component={HomeView} />
          <Route exact path={["/items"]} component={HomeView} />
          <Route exact path="/moderation" component={ModerateItemView}/>
          <Route exact path="/my-items" component={MyItemsView}/>
          <Route exact path="/users" component={UsersListView}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
