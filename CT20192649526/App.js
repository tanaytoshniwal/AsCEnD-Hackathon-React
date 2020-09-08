import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import ViewCustomers from "./ViewCustomers";
import RegisterCustomer from "./RegisterCustomer";

const App = () => {
  return (
    <div>
      <h1>Single Page Application</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/viewCustomers">View Customers</Link>
        </li>
        <li>
          <Link to="/registerCustomer">Register Customer</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/viewCustomers" component={ViewCustomers} />
          <Route exact path="/registerCustomer" component={RegisterCustomer} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
