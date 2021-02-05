import React from "react";
import {
  HorizontalGridLines,
  LineSeries,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";

const ReactVisChart = () => {
  return (
    <div>
      <XYPlot width={300} height={300}>
        <HorizontalGridLines />
        <LineSeries
          color="red"
          data={[
            { x: 1, y: 10 },
            { x: 2, y: 7 },
            { x: 3, y: 12 },
          ]}
        />
        <XAxis title="X" />
        <YAxis />
      </XYPlot>
    </div>
  );
};

export default ReactVisChart;
