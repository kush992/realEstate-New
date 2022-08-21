import React from "react";
import "./authentication.css";
import Icon from "../Icons/icons";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

const Login = () => {

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        // eslint-disable-next-line no-undef
        localStorage.setItem("userDetails", result.user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <section className="login">
      <div className="loginContainer">
        <Icon icon="bhalodi-real-estate" size={200} color="orange" />
        <h1>Sign in to Bhalodi Real Estate now!</h1>
        <h4>
          Join to get news and updates of the company and
          <br /> exclusive offers and prices for your home.
        </h4>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </section>
  );
};

export default Login;
