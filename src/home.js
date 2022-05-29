import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
        flexDirection: "column",
      }}
    >
      <h1>Welcome</h1>
      <Link to="/loginhome">LoginHome</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/products">Products</Link>
      <br />
      <Link to="/tableshow">TableShow</Link>
      <br />
      <Link to="/tableSend">TableSend</Link>
      <br />
      <h1>If u are not a user Register first</h1>
      <h1>or</h1>
      <h1>Ifu are registered already then login</h1>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
