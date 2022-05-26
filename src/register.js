import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const url ="http://localhost:3001/register";
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };
  const submit = async (e)=>{
      e.preventDefault();
     try {
      let userregister = await axios.post(url,{
         username: data.username,
         email: data.email,
         password: data.password
       })
       if(userregister.status === 200){
         alert("Registered successfully");
       }
     } catch (error) {
       console.log(error)
     }
  }
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
      <form onSubmit={(e) => submit(e)}>
        <>
          <fieldset>
            <label>UserName:</label>
            <input
              type="text"
              onChange={(e) => handle(e)}
              id="username"
              value={data.username}
              name="username"
              placeholder="username"
              required
            />
            <br />
            <br />
            <label>Email Id:</label>
            <input
              type="email"
              onChange={(e) => handle(e)}
              id="email"
              value={data.email}
              name="email"
              placeholder="Email"
              required
            />
            <br />
            <br />
            <label>Password:</label>
            <input
              type="password"
              onChange={(e) => handle(e)}
              id="password"
              value={data.password}
              name="password"
              placeholder="PAssword"
              required
            />
            <br />
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
          </fieldset>
        </>
      </form>
      <a href="/login">Login</a>
    </div>
  );
};

export default Register;
