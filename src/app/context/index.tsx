import React, { useState, createContext, ReactNode } from "react";
import { CurrentUser, loginWithPop, signOut } from "../../services/firestore";

export interface ProviderValueProps {
  currentUser: CurrentUser;
  login: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface AppProviderProps {
  children: ReactNode;
}
const DEFAULT_USER: CurrentUser = {
  displayName: "",
  photoURL: "",
  email: "",
};

const AppContext = createContext<ProviderValueProps | undefined>(undefined);

export const AuthContextProvider = AppContext.Provider;

export const AuthContextConsumer = AppContext.Consumer;

const AppProvider = ({ children }: AppProviderProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(DEFAULT_USER);

  const login = async () => {
    const currentUser = await loginWithPop();
    setCurrentUser(currentUser);
  };

  return (
    <AuthContextProvider value={{ login, signOut, currentUser }}>
      {children}
    </AuthContextProvider>
  );
};

export { AppProvider, AppContext };
