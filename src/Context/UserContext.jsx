import { createContext, useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContextProvider = function ({ children }) {
  const [userToken, setUserToken] = useState(cookies.get("userToken"));

  const setUserTokenToCookies = (userToken) => {
    setUserToken(userToken);
    return cookies.set("userToken", userToken, { secure: true });
  };

  const removeUserTokenFromCookies = () => {
    setUserToken(null);
    return cookies.remove("userToken", { secure: true });
  };

  return (
    <UserContext.Provider
      value={{
        userToken,
        setUserTokenToCookies,
        removeUserTokenFromCookies,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
