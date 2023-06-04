"use client";
import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

function SparkLine({ currentColor, id, type, height, width, data, color }) {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      valueType="Numeric"
      lineWidth={1}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
}

export default SparkLine;
