import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { auth } from "./firebase";
import {
  AuthenticationContext,
  AuthenticationProvider,
} from "./src/authentication/Context";
import Account from "./src/navigation/Account";
import Dashboard from "./src/navigation/Dashboard";

export default function App() {
  auth;
  return (
    <AuthenticationProvider>
      <NavigationIndex />
    </AuthenticationProvider>
  );
}

const NavigationIndex = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <Dashboard /> : <Account />}
    </NavigationContainer>
  );
};
