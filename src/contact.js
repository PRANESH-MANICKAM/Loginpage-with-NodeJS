import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <h1>contact</h1>
      <Link to="/products">Products</Link><br />
      <Link to="/loginhome">LoginHome</Link><br />
      <Link to="/login">Loginpage</Link>
    </div>
  );
};

export default Contact;
