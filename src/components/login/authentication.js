import React from "react";
import "./authentication.css";
import Icon from "../../common/icons/icons";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { userToken } from "../../common/utility";

const Login = () => {

  const handleGoogleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((resp) => {
        const token = resp.credential.accessToken;
        const user = resp.user;

        localStorage.setItem("userToken", token);
        localStorage.setItem("userData", JSON.stringify(user));
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  if(userToken) return null;

  return (
    <div className="login">
      <div className="loginContainer">
        <Icon icon="bhalodi-real-estate" size={200} color="orange" />
        <h1>Sign in to Bhalodi Real Estate now!</h1>
        <h2>LOGIN and START selling...!</h2>
        <p>Join to get news and updates of the company and exclusive offers and prices for your home.</p>
        <Button onClick={handleGoogleSignIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
