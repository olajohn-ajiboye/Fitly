import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { loginAsync, logOutAsync } from "../features/auth";
import { RootState } from "../app/rootReducer";

export default function LoginPage() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.isAuth);
  console.log(user);

  return (
    <div>
      <Button onClick={() => dispatch(loginAsync())}> Login</Button>
      <Button onClick={() => dispatch(logOutAsync())}> Out</Button>
    </div>
  );
}
