import React, { useState, createContext } from "react";
import { loginRequest } from "./Authenticate";
import { auth, db } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState();

  auth.onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);

    const administratorQuery = query(
      collection(db, "users"),
      where("EmployeeType", "==", "Administrator")
    );

    const administratorQuerySnapshot = getDocs(administratorQuery);
    administratorQuerySnapshot.then((doc) => {
      console.log(doc.id, " => ", doc.data())
    });

    const employeeQuery = query(
      collection(db, "users"),
      where("EmployeeType", "==", "Employee")
    );

    const employeeQuerySnapshot = getDocs(employeeQuery);
    employeeQuerySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  const onRegister = (
    username,
    password,
    fullName,
    emailAddress,
    contactNumber,
    EmployeeType
  ) => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((u) => {
        if (u !== undefined || u !== "") {
          setUser(u);
          console.log(u.user.uid);

          addDoc(collection(db, "users"), {
            username: username,
            fullName: fullName,
            emailAddress: emailAddress,
            contactNumber: contactNumber,
            EmployeeType: EmployeeType,
          })
            .then((e) => {
              setIsLoading(false);
              console.log(e.id);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
