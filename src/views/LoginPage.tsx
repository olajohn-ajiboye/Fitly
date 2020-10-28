import React, { useContext } from "react";

import { Button } from "@material-ui/core";

import { AppContext } from "../app/context";

export default function LoginPage() {
  const signin = useContext(AppContext)!.login;
  const logout = useContext(AppContext)!.signOut;

  const login = async () => {
    await signin();
  };

  return (
    <div>
      <Button onClick={() => login()}> Login</Button>
      <Button onClick={() => logout()}> Out</Button>
    </div>
  );
}
