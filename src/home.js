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
