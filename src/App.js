import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import ModerateItemView from "./views/ModerateItemView";
import {useDispatch} from "react-redux";
import {fetchAllItemTypes} from "./redux/actions";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllItemTypes());
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={["/login", "/"]} component={LoginView}/>
          <Route exact path="/home" component={HomeView} />
          <Route exact path={["/items"]} component={HomeView} />
          <Route exact path="/moderation" component={ModerateItemView}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
