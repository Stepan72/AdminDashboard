"use client";
import React, { useContext } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from "./index";
import { chatData } from "@public/assets/dummy";
import StateContext from "@context/state-context";

function Chat() {
  const { currentColor, handleCancelClick } = useContext(StateContext);
  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button
            type="button"
            className="text-white text-xs rounded p-1 px-2 bg-orange"
          >
            5 New
          </button>
        </div>
        <Button
          text={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
          onClick={() => {
            handleCancelClick();
          }}
        />
      </div>
      <div className="mt-5">
        {chatData.map((el, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
            >
              check
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chat;

///// Chat started initiated again
