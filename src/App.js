import Layout from "./components/Layout/Layout";
import MacaroonBoxBuilder from "./components/MacaroonBoxBuilder/MacaroonBoxBuilder.js";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <MacaroonBoxBuilder />
      </Layout>
    </div>
  );
}

export default App;