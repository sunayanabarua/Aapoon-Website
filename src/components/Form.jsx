import React from "react";

function Form(props) {
  return (
    <form className="form">
      <h1>{props.isRegistered ? "Please Sign In" : "Please Sign Up"}</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
