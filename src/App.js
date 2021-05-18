import Layout from "./components/Layout/Layout";
import MacaroonBoxBuilder from "./components/MacaroonBoxBuilder/MacaroonBoxBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

import "./App.css";
import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>
      <Switch>
          <Route path="/" component={MacaroonBoxBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;