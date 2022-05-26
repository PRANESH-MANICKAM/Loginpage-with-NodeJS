import React from "react";
import { Link } from "react-router-dom";
const LoginHome = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = 'http://localhost:3000/';
  }
  return (
    <div style={{background:"green",color:"white",padding:"20px 100px"}}>
      <h1>Welcome pranesh, You have login successfully</h1>
      <br />
      <br />
      <br />
      <Link to="/products">Products</Link><br />
      <Link to="contact">Contact</Link><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default LoginHome;
