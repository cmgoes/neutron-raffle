import { Route, Switch, Redirect } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Stake from "pages/Stake";
import MiningPoints from "pages/MiningPoints";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stake" component={Stake} />
        <Route exact path="/mining-points" component={MiningPoints} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
