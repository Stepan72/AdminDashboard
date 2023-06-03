import React, { useContext } from "react";
import StateContext from "@context/state-context";
import Link from "next/link";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "@public/assets/dummy";

function Sidebar() {
  const { activeMenu, setActiveMenu, screenSize } = useContext(StateContext);

  //// Нужно будет через useState сделать активный линк через хендлер
  const activeLinkState = false;

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  function handleCloseSideBar() {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              href="/"
              onClick={() => {
                handleCloseSideBar();
              }}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900 dark:text-white "
            >
              <SiShopware className="text-3x" />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {
                  setActiveMenu((prevState) => !prevState);
                }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10 flex-col">
            {links.map((item) => {
              return (
                <div key={item.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                  {item.links.map((link) => {
                    return (
                      <Link
                        href={`/${link.name}`}
                        key={link.name}
                        onClick={() => {
                          handleCloseSideBar();
                        }}
                        className={`${
                          activeLinkState ? activeLink : normalLink
                        }`}
                      >
                        {link.icon}
                        <span className="capitalize">{link.name}</span>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
