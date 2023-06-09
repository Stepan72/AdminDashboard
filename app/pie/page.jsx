"use client";
import React, { useContext } from "react";
import { pieChartData } from "@public/assets/dummy";
import { Header } from "@components";
import StateContext from "@context/state-context";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

function Pie() {
  const { currentMode } = useContext(StateContext);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white  dark:bg-secondary-dark-bg rounded-3xl ">
      <Header category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <AccumulationChartComponent
          id="chart-pie"
          data={pieChartData}
          height="full"
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          tooltip={{ enable: true }}
          legendSettings={{
            background: currentMode === "Light" ? "white" : "gray",
            textStyle: { size: "20px" },
          }}
        >
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationDataLabel,
              AccumulationTooltip,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Sale"
              dataSource={pieChartData}
              xName="x"
              yName="y"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="70%"
              explode
              explodeOffset="10%"
              explodeIndex={2}
              dataLabel={{
                visible: true,
                name: "text",
                position: "Inside",
                font: {
                  fontWeight: "600",
                  color: "#fff",
                  size: "18px",
                },
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
}

export default Pie;
