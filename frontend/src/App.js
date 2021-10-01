import logo from './logo.svg';
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import { Restaurants } from './containers/Restaurants';
import { Foods } from './containers/Foods';
import { Orders } from './containers/Order';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Switch>
          // restaurants page
          <Route
            exact
            path="/restaurants"
            >
            <Restaurants />
          </Route>
          // foods index
          <Route
            exact
            path="/foods"
            >
            <Foods />
          </Route>
          orders index
          <Route
            exact
            path="/orders"
            >
            <Orders />
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  )
}

export default App;
