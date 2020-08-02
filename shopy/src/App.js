import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Registration } from "./pages/Registration";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/register" component={Registration} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
