import React, { useState } from "react";
import AppContext from "./AppContext";

const ContextProvider = ({ children }) => {
  const [role, setRole] = useState("admin");
  const ContextInfo = {
    role,
    setRole,
  };
  return <AppContext value={ContextInfo}>{children}</AppContext>;
};

export default ContextProvider;
