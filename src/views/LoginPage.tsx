import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import { loginAsync, logOutAsync } from "../features/auth";

export default function LoginPage() {
  const dispatch = useDispatch();

  const login = async () => {
    await dispatch(loginAsync());
    if (window.location.pathname.includes("/login")) {
      window.location.replace("/page");
    }
  };

  return (
    <div>
      <Button onClick={() => login()}> Login</Button>
      <Button onClick={() => dispatch(logOutAsync())}> Out</Button>
    </div>
  );
}
