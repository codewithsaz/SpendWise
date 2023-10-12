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
    <div className=" w-full h- h-full flex justify-center items-center gap-2 rounded-lg  ">
      <div className="w-full h-full flex flex-col justify-center items-center rounded-md pt-4 bg-gray-200 dark:bg-gray-900">
        <h2 className=" text-xl">Income</h2>
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
      <div className="w-full h-full flex flex-col justify-center items-center rounded-md pt-4 bg-gray-200 dark:bg-gray-900">
        <h2 className=" text-xl">Expense</h2>
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
    </div>
  );
};

export default CatergoryAnalytics;
