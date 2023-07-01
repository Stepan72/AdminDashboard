"use client";
import React, { useContext, useState } from "react";
import StateContext from "./state-context";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#7352FF");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  function setMode(e) {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  }
  function setColor(color) {
    setCurrentColor(color);
    localStorage.setItem("ColorMode", color);
    setThemeSettings(false);
  }

  function handleClick(clicked) {
    setIsClicked({ ...initialState, [clicked]: true });
  }
  function handleCancelClick() {
    setIsClicked(initialState);
  }

  const stateContext = {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    currentMode,
    setColor,
    setMode,
    themeSettings,
    setThemeSettings,
    handleCancelClick,
  };

  return (
    <StateContext.Provider value={stateContext}>
      {children}
    </StateContext.Provider>
  );
}

export default ContextProvider;
