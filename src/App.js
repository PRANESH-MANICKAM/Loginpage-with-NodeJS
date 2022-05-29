import Home from "./home.js";
import Login from "./login";
import Register from "./register";
import LoginHome from "./loginHome";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Product from "./product";
import Contact from "./contact";
import TableSend from "./tableSend";
import TableShow from "./tableShow";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        
        <PrivateRoute
          exact
          path="/loginhome"
          name="loginhome"
          component={(props) => <LoginHome {...props} />}
        />
        <PrivateRoute
          exact
          path="/products"
          name="product"
          component={(props) => <Product {...props} />}
        />
        <PrivateRoute
          exact
          path="/contact"
          name="contact"
          component={(props) => <Contact {...props} />}
        />
        <PrivateRoute
          exact
          path="/tablesend"
          name="tablesend"
          component={(props) => <TableSend {...props} />}
        />
        <PrivateRoute
          exact
          path="/tableshow"
          name="tableshow"
          component={(props) => <TableShow {...props} />}
        />
      </Switch>
    </>
  );
}

export default App;
