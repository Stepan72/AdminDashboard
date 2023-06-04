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
  console.log("render main");
  const { activeMenu } = useContext(StateContext);

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center  ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-96 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63 448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
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
      <div></div>
    </div>
  );
}

export default Ecommerce;

//// Old Main page
// "use client";
// import React, { useEffect, useContext } from "react";
// import StateContext from "@context/state-context";
// import { FiSettings } from "react-icons/fi";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import { Navbar, Footer, Sidebar, ThemeSettings } from "@components";
// // Registering Syncfusion license key
// import { registerLicense } from "@syncfusion/ej2-base";

// registerLicense(
//   "ORg4AjUWIQA/Gnt2VFhiQldPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXtQd0ViWnpfeXxdQGM="
// );

// function Home() {
//   const { activeMenu } = useContext(StateContext);

//   return (
//     <div>
//       <div className="flex relative dark:bg-main-dark-bg ">
//         <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
//           <TooltipComponent content="Settings" position="Top">
//             <button
//               type="button"
//               className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
//               style={{ background: "blue", borderRadius: "50%" }}
//             >
//               <FiSettings />
//             </button>
//           </TooltipComponent>
//         </div>
//         {activeMenu ? (
//           <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
//             <Sidebar />
//           </div>
//         ) : (
//           <div className="w-0 dark:bg-secondary-dark-bg">
//             <Sidebar />
//           </div>
//         )}
//         <div
//           className={`${
//             activeMenu ? "md:ml-72" : "flex-2"
//           } dark:bg-main-bg bg-main-bg min-h-screen w-full
//           `}
//         >
//           <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
//             <Navbar />
//           </div>
//         </div>
//         {"Ecommerce /"}
//       </div>
//     </div>
//   );
// }

// export default Home;
