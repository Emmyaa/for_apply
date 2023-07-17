import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Prob1 from './components/page/Prob1';
import Prob2 from './components/page/Prob2';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/p1" component={Prob1} />
            <Route path="/p2" component={Prob2} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;