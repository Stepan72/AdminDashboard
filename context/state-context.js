"use client";
import React from "react";

const StateContext = React.createContext({
  activeMenu: true,
  isClicked: false,
  screenSize: undefined,
  currentColor: undefined,
  currentMode: undefined,
  themeSettings: false,
  setThemeSettings: () => {},
  setColor: () => {},
  setMode: () => {},
  setActiveMenu: () => {},
  handleClick: () => {},
  setScreenSize: () => {},
});

export default StateContext;
