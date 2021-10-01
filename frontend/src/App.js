// eslint-disable-next-line
// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import './App.css';
import { Restaurants } from './containers/Restaurants';
import { Foods } from './containers/Foods';
import { Orders } from './containers/Order';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/restaurants"
        >
          <Restaurants />
        </Route>
        <Route
          exact
          path="/foods"
        >
          <Foods />
        </Route>
        <Route
          exact
          path="/orders"
        >
          <Orders />
        </Route>

        <Route
          exact
          path="/restaurants/:restaurantsId/foods"
          render={({ match }) =>
            <Foods match={match} />
          }
        ></Route>
      </Switch>
    </Router>
  )
}

export default App;
