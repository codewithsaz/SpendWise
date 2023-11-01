import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const expenseData = [
  {
    totalExpenses: 2500,
    year: "2023",
    category: "Vehicle",
  },
  {
    totalExpenses: 3500,
    year: "2023",
    category: "Food",
  },
  {
    totalExpenses: 11100,
    year: "2023",
    category: "Vacation",
  },
  {
    totalExpenses: 1100,
    year: "2023",
    category: "Commute",
  },
  {
    totalExpenses: 6500,
    year: "2023",
    category: "Utilities",
  },
];

const incomeData = [
  {
    totalIncome: 2500,
    year: "2023",
    category: "Salary",
  },
  {
    totalIncome: 2500,
    year: "2023",
    category: "Loan",
  },
  {
    totalIncome: 3600,
    year: "2023",
    category: "Intrest",
  },
  {
    totalIncome: 6500,
    year: "2023",
    category: "Trading",
  },
  {
    totalIncome: 3000,
    year: "2023",
    category: "Other",
  },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const CatergoryAnalytics = () => {
  return (
    <div className=" w-full h- h-full flex justify-center items-center gap-2 rounded-lg  ">
      <div className="w-full h-full flex flex-col justify-center items-center rounded-md pt-4 bg-gray-200 dark:bg-gray-900">
        <h2 className=" text-xl">Expense Category</h2>
        <ResponsiveContainer
          width="95%"
          // className=" bg-gray-200 dark:bg-gray-900 rounded-lg"
        >
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
              formatter={(value, name, entry) => [
                `${entry.payload.category}: ${entry.payload.totalExpenses}`,
              ]}
            />

            <Pie
              data={expenseData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="totalExpenses"
            >
              {expenseData.map((entry, index) => (
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
        <h2 className=" text-xl">Income Category</h2>
        <ResponsiveContainer
          width="95%"
          // className=" bg-gray-200 dark:bg-gray-900 rounded-lg"
        >
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
              formatter={(value, name, entry) => [
                `${entry.payload.category}: ${entry.payload.totalIncome}`,
              ]}
            />

            <Pie
              data={incomeData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="totalIncome"
            >
              {incomeData.map((entry, index) => (
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
