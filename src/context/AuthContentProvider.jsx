import { createContext, useState } from "react";

export let AuthContext = createContext();

let AuthContentProvider = ({ children }) => {
  let [showForm, setShowForm] = useState(false);
  let [showWaitingLoading, setShowWaitingLoading] = useState(false);
  let obj = [showForm, setShowForm, showWaitingLoading, setShowWaitingLoading];
  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

export default AuthContentProvider;
