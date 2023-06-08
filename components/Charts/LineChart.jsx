"use client";
import React, { useContext } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "@public/assets/dummy";
import StateContext from "@context/state-context";

function LineChart() {
  const { currentMode } = useContext(StateContext);

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      // width="800px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{
        background: currentMode === "Light" ? "white" : "gray",
      }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((el, index) => {
          return <SeriesDirective key={index} {...el} />;
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default LineChart;
