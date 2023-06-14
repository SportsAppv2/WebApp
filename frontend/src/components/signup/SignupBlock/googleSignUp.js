import React, { useEffect } from "react";
import GoogleLogo from "../../../assets/iconGoogle1.svg";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const REACT_APP_GOOGLE_CLIENT_ID =
  "293172438343-mue6o18g9djqrhqvkc23ks5hkuq0rp8e.apps.googleusercontent.com";

const GoogleSignUp = () => {
  const onSuccess = (res) => {
    console.log("Success. Response body is ", res);
  };
  const onFailure = (res) => {
    console.log("Failed. Response body is ", res);
  };
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
      gapi.load("client:auth2", start);
    };
  });
  return (
    <div className="">
      <GoogleLogin
        clientId={REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={false}
        className="google-login-button"
      />
    </div>
  );
};

export default GoogleSignUp;
