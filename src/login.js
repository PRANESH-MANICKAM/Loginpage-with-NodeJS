import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const url = "http://localhost:3001/login";
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const verify = async (e) => {
    e.preventDefault();
    try {
      let userlogin = await axios.post(url, {
        email: data.email,
        password: data.password,
      });
      if (userlogin.status === 200) {
        localStorage.setItem("userToken", userlogin.data.token);
        alert("Logged in successfully");
        history.push("/loginhome");
        setTimeout(()=>{localStorage.clear()},86400000)
      }
    } catch (error) {
      console.log("error in login api call ==>", error);
    }
  };
  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };
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
      <h1>
        Back to <Link to="/">Home</Link>
      </h1>
      <form onSubmit={(e) => verify(e)}>
        <fieldset>
          <label>Email:</label>
          <input
            type="text"
            onChange={(e) => handle(e)}
            value={data.email}
            id="email"
            name="email"
            required
            placeholder="enter email"
          />
          <br />
          <br />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => handle(e)}
            value={data.password}
            id="password"
            name="password"
            required
            placeholder="enter password"
          />
          <br />
          <br />
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <a href="/register">Register</a>
    </div>
  );
};

export default Login;
