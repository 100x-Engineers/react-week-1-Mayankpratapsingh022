import React, { useState } from "react";


export const UserContext = React.createContext(); 

function UserContextProvider({ children }) {

  const [user, setuser] = useState({
    email: " ",
    name: "  ",
    birthdate: " ",
    birthmonth:" ",
    birthyear:" "
  });








const ContextValue = { user, setuser }

  return (
    <UserContext.Provider value={ContextValue}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
