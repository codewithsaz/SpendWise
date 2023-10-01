import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Group A", value: 1600 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const CatergoryAnalytics = () => {
  return (
    <div className=" w-full h-48 lg:h-64 p-2 flex justify-center items-center gap-1 rounded-lg  dark:bg-gray-900 ">
      <ResponsiveContainer
        width="95%"
        // className=" bg-gray-200 dark:bg-gray-900 rounded-lg"
      >
        <PieChart>
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
          />
          <Pie
            data={data}
            innerRadius={"70%"}
            outerRadius={"90%"}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ResponsiveContainer
        width="95%"
        // className=" bg-gray-200 dark:bg-gray-900 rounded-lg"
      >
        <PieChart>
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
          />

          <Pie
            data={data}
            innerRadius={"70%"}
            outerRadius={"90%"}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CatergoryAnalytics;
