import React, { createContext } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const authInfo = {
    name: "Arman",
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}></AuthContext.Provider>
    </div>
  );
};

export default UserContext;
