import { useContext } from "react";
import { UserContext } from "./UserContext";

export function useUserToken() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("useUserToken must be used within a UserContextProvider");

  return context;
}
