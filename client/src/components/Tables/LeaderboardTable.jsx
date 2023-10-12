import React, { useEffect } from "react";
import { Card, Typography, Select, Option } from "@material-tailwind/react";
import Pagination from "../pagination/Pagination";
import useLeaderboardStore from "../../store/leadboardstore";
import axios from "axios";
axios.defaults.withCredentials = true;

const TABLE_HEAD = ["Pos", "Name", "Savings"];

const TABLE_ROWS = [
  {
    Date: "2023-10-01",
    Type: "Expense",
    Amount: "$50.00",
    Category: "Groceries",
    Description: "Weekly grocery shopping",
  },
  {
    Date: "2023-10-02",
    Type: "Income",
    Amount: "$1000.00",
    Category: "Salary",
    Description: "Monthly paycheck",
  },
  {
    Date: "2023-10-03",
    Type: "Expense",
    Amount: "$30.00",
    Category: "Dining Out",
    Description: "Dinner with friends",
  },
  {
    Date: "2023-10-04",
    Type: "Income",
    Amount: "$200.00",
    Category: "Freelance",
    Description: "Web design project",
  },
  {
    Date: "2023-10-05",
    Type: "Expense",
    Amount: "$20.00",
    Category: "Transportation",
    Description: "Bus fare",
  },
  {
    Date: "2023-10-06",
    Type: "Expense",
    Amount: "$75.00",
    Category: "Utilities",
    Description: "Electricity bill",
  },
  {
    Date: "2023-10-07",
    Type: "Income",
    Amount: "$300.00",
    Category: "Part-Time Job",
    Description: "Weekly part-time earnings",
  },
  {
    Date: "2023-10-08",
    Type: "Expense",
    Amount: "$40.00",
    Category: "Entertainment",
    Description: "Movie night",
  },
  {
    Date: "2023-10-09",
    Type: "Expense",
    Amount: "$15.00",
    Category: "Clothing",
    Description: "New socks",
  },
  {
    Date: "2023-10-10",
    Type: "Income",
    Amount: "$150.00",
    Category: "Consulting",
    Description: "Consulting gig",
  },
  {
    Date: "2023-10-08",
    Type: "Expense",
    Amount: "$40.00",
    Category: "Entertainment",
    Description: "Movie night",
  },
  {
    Date: "2023-10-09",
    Type: "Expense",
    Amount: "$15.00",
    Category: "Clothing",
    Description: "New socks",
  },
  {
    Date: "2023-10-10",
    Type: "Income",
    Amount: "$150.00",
    Category: "Consulting",
    Description: "Consulting gig",
  },
  {
    Date: "2023-10-08",
    Type: "Expense",
    Amount: "$40.00",
    Category: "Entertainment",
    Description: "Movie night",
  },
  {
    Date: "2023-10-09",
    Type: "Expense",
    Amount: "$15.00",
    Category: "Clothing",
    Description: "New socks",
  },
  {
    Date: "2023-10-10",
    Type: "Income",
    Amount: "$150.00",
    Category: "Consulting",
    Description: "Consulting gig",
  },
  {
    Date: "2023-10-08",
    Type: "Expense",
    Amount: "$40.00",
    Category: "Entertainment",
    Description: "Movie night",
  },
  {
    Date: "2023-10-09",
    Type: "Expense",
    Amount: "$15.00",
    Category: "Clothing",
    Description: "New socks",
  },
  {
    Date: "2023-10-10",
    Type: "Income",
    Amount: "$150.00",
    Category: "Consulting",
    Description: "Consulting gig",
  },
  {
    Date: "2023-10-08",
    Type: "Expense",
    Amount: "$40.00",
    Category: "Entertainment",
    Description: "Movie night",
  },
  {
    Date: "2023-10-09",
    Type: "Expense",
    Amount: "$15.00",
    Category: "Clothing",
    Description: "New socks",
  },
  {
    Date: "2023-10-10",
    Type: "Income",
    Amount: "$150.00",
    Category: "Consulting",
    Description: "Consulting gig",
  },
  {
    Date: "2023-10-08",
    Type: "Expense",
    Amount: "$40.00",
    Category: "Entertainment",
    Description: "Movie night",
  },
  {
    Date: "2023-10-09",
    Type: "Expense",
    Amount: "$15.00",
    Category: "Clothing",
    Description: "New socks",
  },
  {
    Date: "2023-10-10",
    Type: "Income",
    Amount: "$150.00",
    Category: "Consulting",
    Description: "Consulting gig",
  },
];
const LeaderboardTable = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  const {
    leaderboard,
    totalPages,
    itemsPerPage,
    currentPage,
    setLeaderboard,
    setCurrentPage,
    setTotalPages,
    setItemsPerPage,
  } = useLeaderboardStore((state) => ({
    leaderboard: state.leaderboard,
    totalPages: state.totalPages,
    itemsPerPage: state.itemsPerPage,
    currentPage: state.currentPage,
    setLeaderboard: state.setLeaderboard,
    setCurrentPage: state.setCurrentPage,
    setTotalPages: state.setTotalPages,
    setItemsPerPage: state.setItemsPerPage,
  }));
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `${base_url}/leaderboard?page=${currentPage}&size=${itemsPerPage}`
        );
        if (res.data.success) {
          setLeaderboard(res.data.leaderboard);
          setTotalPages(res.data.totalPages);
          setCurrentPage(res.data.currentPage);
          console.log(res.data);
        }
      } catch (error) {}
    }

    fetchData();
  }, [itemsPerPage]);
  return (
    <>
      <div className="h-max w-full flex justify-between p-4">
        <h2 className="font-semibold text-3xl">Leaderboard</h2>
        <div className="flex gap-2 items-center">
          <Select
            label="Items per page"
            onChange={(e) => {
              setItemsPerPage(Number(e));
            }}
          >
            <Option value="2">2</Option>
            <Option value="5">5</Option>
            <Option value="7">7</Option>
            <Option value="10">10</Option>
            <Option value="15">15</Option>
          </Select>
        </div>
      </div>
      <Card className=" h-max lg:h-auto w-full overflow-auto dark:bg-gray-800 dark:text-white">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-blue-gray-900 dark:text-white p-4"
                >
                  <Typography
                    variant="small"
                    className="font-normal leading-none  dark:text-white"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(({ name, savings }, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography variant="small" className="font-normal">
                    {index + 1}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" className="font-normal">
                    {savings}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="w-full flex items-center justify-center p-2">
        {/* <Pagination /> */}
      </div>
    </>
  );
};

export default LeaderboardTable;
