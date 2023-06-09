"use client";
import React, { useEffect, useContext } from "react";
import StateContext from "@context/state-context";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Stacked, Pie, Button, SparkLine } from "@components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "@public/assets/dummy";

function Ecommerce() {
  // console.log("render main");
  const { activeMenu, currentColor } = useContext(StateContext);

  return (
    <div className="mt-4">
      <div className="flex flex-wrap  justify-center  ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 lg:h-60 rounded-xl w-full lg:mx-28 p-8 pt-9 m-3  bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-800 ">Earnings</p>
              <p className="text-2xl text-gray-100 ">$63 448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
          {earningData.map((el) => {
            return (
              <div
                key={el.title}
                className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
              >
                <button
                  type="button"
                  style={{ color: el.iconColor, backgroundColor: el.iconBg }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {el.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{el.amount}</span>
                  <span
                    className={`text-sm ${
                      +el.percentage.split("%")[0] < 0
                        ? "text-red-600"
                        : "text-green-600"
                    } ml-2`}
                  >
                    {el.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400 mt-1">{el.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93 438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 ml-3 text-white text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48 438</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div className="m-4">
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
