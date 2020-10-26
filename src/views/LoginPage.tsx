import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

import { loginAsync, logOutAsync } from "../features/auth";

export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const login = () => {
    dispatch(loginAsync());
    history ? history.push("/page") : window.location.replace("/page");
  };

  return (
    <div>
      <Button onClick={() => login()}> Login</Button>
      <Button onClick={() => dispatch(logOutAsync())}> Out</Button>
    </div>
  );
}
