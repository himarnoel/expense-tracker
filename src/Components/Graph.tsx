import { Chart } from "chart.js";
import React, { FC } from "react";
import { Doughnut } from "react-chartjs-2";
const Graph: FC = () => {
  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">chart</div>
      </div>
      <div className="flex flex-col py-10 gap-4"></div>
    </div>
  );
};

export default Graph;
