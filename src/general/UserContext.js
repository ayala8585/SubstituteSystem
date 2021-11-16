import React, { createContext, useState } from "react";

export const UserContext = createContext({
  userType: 0,
  setUserType: () => {},
});

const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState();

  return (
    <UserContext.Provider
      value={{ userType: userType, setUserType: setUserType }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
