import { createContext, useContext, useState } from "react";
import React from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [page, setPage] = useState(1);
  const [postID, setID] = useState("");
  const [display, setDisplay] = useState(false);
  return (
    <Context.Provider
      value={{
        page,
        setPage,
        postID,
        setID,
        display,
        setDisplay,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
