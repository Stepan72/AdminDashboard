"use client";
import React, { useContext } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import { Header } from "@components";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "@public/assets/dummy";
import StateContext from "@context/state-context";

function Bar() {
  const { currentMode } = useContext(StateContext);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 ng-white  dark:bg-secondary-dark-bg rounded-3xl ">
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          legendSettings={{
            background: currentMode === "Light" ? "white" : "gray",
          }}
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default Bar;
