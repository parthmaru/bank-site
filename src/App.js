import Home from "./components/Home/Home";
import UserDetail from "./components/UserDetail/UserDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transfer from "./components/Transfer/Transfer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      <Switch>
        <Route path="/user-detail" component={UserDetail} exact />
      </Switch>
      <Switch>
        <Route path="/transfer/:name" component={Transfer} exact />
      </Switch>
    </Router>
  );
}

export default App;
