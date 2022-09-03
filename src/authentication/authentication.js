import React from "react";
import "./authentication.css";
import Icon from "../Icons/icons";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { userToken } from "../utils/utility";

const Login = () => {

  const handleGoogleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((resp) => {
        const token = resp.credential.accessToken;
        const user = resp.user;

        localStorage.setItem("userToken", token);
        localStorage.setItem("userData", user);
      })
      .catch((error) => console.error(error));
  };

  if(userToken) return null;

  return (
    <div className="login">
      <div className="loginContainer">
        <Icon icon="bhalodi-real-estate" size={200} color="orange" />
        <h1>Sign in to Bhalodi Real Estate now!</h1>
        <h4>
          Join to get news and updates of the company and
          <br /> exclusive offers and prices for your home.
        </h4>
        <Button onClick={handleGoogleSignIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
