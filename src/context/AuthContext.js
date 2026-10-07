import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("shopex_user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });


  const register = (name, email, password) => {

    const newUser = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "shopex_user",
      JSON.stringify(newUser)
    );

    setUser(newUser);
  };


  const login = (email, password) => {

    const savedUser = localStorage.getItem("shopex_user");

    if (!savedUser) {
      return false;
    }

    const userData = JSON.parse(savedUser);

    if (
      userData.email === email &&
      userData.password === password
    ) {
      setUser(userData);

      return true;
    }

    return false;
  };


  const logout = () => {

    setUser(null);

    localStorage.removeItem("shopex_user");
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};