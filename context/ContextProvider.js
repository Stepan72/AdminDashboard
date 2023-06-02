"use client";
import React, { useContext, useState } from "react";
import StateContext from "./state-context";

function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(true);

  function setActiveMenuHandler() {
    setActiveMenu((prevState) => !prevState);
  }

  const stateContext = {
    activeMenu,
    setActiveMenu: setActiveMenuHandler,
  };

  return (
    <StateContext.Provider value={stateContext}>
      {children}
    </StateContext.Provider>
  );
}

export default ContextProvider;
