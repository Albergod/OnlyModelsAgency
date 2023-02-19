import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useHookContext = () => {
  return useContext(Context);
};

export const CONTEXTPROVIDER = ({ children }) => {
  const [errors, setErrors] = useState("");
  const [showBg, setShowBg] = useState(true);

  function showError(error) {
    setErrors(error);
  }
  function emptyErrors() {
    setErrors("");
  }
  function changeShowBg(boolean) {
    setShowBg(boolean);
  }
  return (
    <Context.Provider
      value={{ errors, showError, showBg, changeShowBg, emptyErrors }}
    >
      {children}
    </Context.Provider>
  );
};
