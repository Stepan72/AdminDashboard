"use client";
import React, { useContext } from "react";
import { Header } from "@components";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "@public/assets/dummy";
import StateContext from "@context/state-context";

function Area() {
  const { currentMode } = useContext(StateContext);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 ng-white  dark:bg-secondary-dark-bg rounded-3xl ">
      <Header category="Area" title="Inflation Rate in Percentage" />
      <div className="w-full">
        <ChartComponent
          id="area-chart"
          height="420px"
          // width="800px"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((el, index) => {
              return <SeriesDirective key={index} {...el} />;
            })}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default Area;
