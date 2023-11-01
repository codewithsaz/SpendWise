import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import axios from "axios";
axios.defaults.withCredentials = true;

const data = [
  {
    month: "Jan",
    expense: 4000,
    income: 2400,
  },
  {
    month: "Feb",
    expense: 3000,
    income: 1398,
  },
  {
    month: "Mar",
    expense: 2000,
    income: 9800,
  },
  {
    month: "Apr",
    expense: 2780,
    income: 3908,
  },
  {
    month: "May",
    expense: 1890,
    income: 4800,
  },
  {
    month: "Jun",
    expense: 2390,
    income: 3800,
  },
  {
    month: "Jul",
    expense: 3490,
    income: 4300,
  },
  {
    month: "Aug",
    expense: 3490,
    income: 4300,
  },
  {
    month: "Sep",
    expense: 3490,
    income: 4300,
  },
  {
    month: "Oct",
    expense: 3490,
    income: 4300,
  },
  {
    month: "Nov",
    expense: 3490,
    income: 4300,
  },
  {
    month: "Dec",
    expense: 3490,
    income: 4300,
  },
];

const MonthAnalyticsChart = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get(
  //         `${base_url}/transaction/monthly?year=2023`
  //       );
  //       if (res.data.success) {
  //         data = res.data.history;
  //         console.log(res.data.history);
  //       }
  //     } catch (error) {}
  //   }

  //   fetchData();
  // }, []);
  return (
    <div className=" w-full h-48 lg:h-72 pt-2 rounded-lg  dark:bg-gray-900 ">
      {/* <h1>Monthly expense</h1> */}
      <ResponsiveContainer
        width="95%"
        height="100%"
        className="text-black  dark:text-white "
      >
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid /> */}
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="expense" fill="#a11d1d" />
          <Bar dataKey="income" fill="#1da126" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthAnalyticsChart;
