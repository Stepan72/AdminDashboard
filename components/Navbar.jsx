"use client";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "./../public/assets/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import StateContext from "@context/state-context";

function Navbar() {
  const { activeMenu, setActiveMenu } = useContext(StateContext);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">Navbar</div>
  );
}

export default Navbar;
