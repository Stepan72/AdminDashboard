"use client";
import React, { useContext } from "react";
import StateContext from "@context/state-context";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "@components";

// Registering Syncfusion license key
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "ORg4AjUWIQA/Gnt2VFhiQldPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXtQd0ViWnpfeXxdQGM="
);

function NavSideBarWrapper({ children }) {
  console.log("render wrapper");
  const { activeMenu, themeSettings, setThemeSettings } =
    useContext(StateContext);

  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg ">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: "blue", borderRadius: "50%" }}
              onClick={() => {
                setThemeSettings(true);
              }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`${
            activeMenu ? "md:ml-72" : "flex-2"
          } dark:bg-main-bg bg-main-bg min-h-screen w-full
          `}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          {children}
        </div>
        {themeSettings && <ThemeSettings />}
      </div>
    </div>
  );
}

export default NavSideBarWrapper;
