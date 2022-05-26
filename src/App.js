import "./App.css";
import Home from "./home.js";
import Login from "./login";
import Register from "./register";
import LoginHome from "./loginHome";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Product from "./product";
import Contact from "./contact";

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
      </Switch>
    </>
  );
}

export default App;
