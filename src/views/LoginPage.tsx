import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { login, logOut } from "../features/auth";

export default function LoginPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(login())}> Login</Button>
      <Button onClick={() => dispatch(logOut())}> Out</Button>
    </div>
  );
}
