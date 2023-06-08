"use client";
import React, { useContext } from "react";
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
import StateContext from "@context/state-context";

function Stacked({ width, height }) {
  const { currentMode } = useContext(StateContext);

  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{
        background: currentMode === "Light" ? "white" : "gray",
      }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((el, index) => {
          return <SeriesDirective key={index} {...el} />;
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default Stacked;
