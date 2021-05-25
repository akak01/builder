import Layout from "./components/Layout/Layout";
import MacaroonBoxBuilder from "./components/MacaroonBoxBuilder/MacaroonBoxBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Logout/Logout";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { restore } from "./store/actions/auth";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => {
    dispatch(restore())
  }, [dispatch]);

  let output = (
    <Switch>
      <Route path="/" component={MacaroonBoxBuilder} exact />
      <Route path="/auth" component={Auth} />
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    output = (
      <Switch>
        <Route path="/" component={MacaroonBoxBuilder} exact />
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
    </Switch>
    )
  }
  return (
    <div className="App">
      <Layout>
        {output}
      </Layout>
    </div>
  );
}

export default App;