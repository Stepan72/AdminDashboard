"use client";
import React from "react";

const StateContext = React.createContext({
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  activeMenu: true,
  setActiveMenu: () => {},
});

export default StateContext;
