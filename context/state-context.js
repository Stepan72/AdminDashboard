"use client";
import React from "react";

const StateContext = React.createContext({
  activeMenu: true,
  isClicked: false,
  screenSize: undefined,
  setActiveMenu: () => {},
  handleClick: () => {},
  setScreenSize: () => {},
});

export default StateContext;
