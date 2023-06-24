"use client";
import React, { useContext } from "react";
import { Header } from "@components";
import StateContext from "@context/state-context";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "@public/assets/dummy";

function Stacked() {
  const { currentMode } = useContext(StateContext);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={stackedPrimaryXAxis}
          primaryYAxis={stackedPrimaryYAxis}
          width="100%"
          height="120%"
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{
            background: currentMode === "Light" ? "white" : "gray",
            textStyle: { size: "18px" },
          }}
        >
          <Inject
            services={[StackingColumnSeries, Category, Legend, Tooltip]}
          />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {stackedCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default Stacked;
