import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>product</h1>
      <Link to="/loginhome">LoginHome</Link><br />
      <Link to="/contact">Contact</Link><br />
      <Link to="/login">Loginpage</Link><br />
      <Link to="/tableSend">TableSend</Link><br />
    </div>
  );
};

export default Product;
