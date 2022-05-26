import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({component: Component}) => {
  var session_token = localStorage.getItem("userToken");

  return (
      <Route
        render={() =>
          session_token !== null ? (
          <Component />
          ) : (
            <>
             <Redirect
              to={{
                pathname: "/loginhome",
              }}
            />
            <Redirect
              to={{
                pathname: "/products",
              }}
            />
            <Redirect
              to={{
                pathname: "/contact",
              }}
            />
            </>
          )
        }
      />
  );
};

export default PrivateRoute;
