import { createContext, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContextProvider = function ({ children }) {
  const [userToken, setUserToken] = useState(
    localStorage.getItem?.("userToken")
  );

  const setUserTokenToLocalStorage = (userToken) => {
    setUserToken(userToken);
    return localStorage.setItem("userToken", userToken);
  };

  const removeUserTokenFromLocalStorage = () => {
    setUserToken(null);
    return localStorage.removeItem?.("userToken");
  };

  return (
    <UserContext.Provider
      value={{
        userToken,
        setUserTokenToLocalStorage,
        removeUserTokenFromLocalStorage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
