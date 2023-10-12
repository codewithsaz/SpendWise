import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import Pagination from "../pagination/Pagination";
import useTransactionStore from "../../store/transactionStore";
import useUserStore from "../../store/userStore";

import axios from "axios";
axios.defaults.withCredentials = true;

const TABLE_HEAD = [
  "Date",
  "Type",
  "Amount",
  "Category",
  "Description",
  "Actions",
];

const ExpenseTable = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  const {
    alltransaction,
    totalPages,
    itemsPerPage,
    currentPage,
    setHistory,
    setCurrentPage,
    setTotalPages,
    setItemsPerPage,
    deleteTransaction,
    transactionChange,
  } = useTransactionStore((state) => ({
    alltransaction: state.alltransaction,
    totalPages: state.totalPages,
    itemsPerPage: state.itemsPerPage,
    currentPage: state.currentPage,
    setHistory: state.setHistory,
    setCurrentPage: state.setCurrentPage,
    setTotalPages: state.setTotalPages,
    setItemsPerPage: state.setItemsPerPage,
    deleteTransaction: state.deleteTransaction,
    transactionChange: state.transactionChange,
  }));

  const { RemoveIncome, RemoveExpense } = useUserStore((state) => ({
    RemoveIncome: state.RemoveIncome,
    RemoveExpense: state.RemoveExpense,
  }));
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `${base_url}/transaction/all?page=${currentPage}&size=${itemsPerPage}`
        );
        if (res.data.success) {
          setHistory(res.data.history);
          setTotalPages(res.data.totalPages);
          setCurrentPage(res.data.currentPage);
          console.log(res.data);
        }
      } catch (error) {}
    }

    fetchData();
  }, [transactionChange, itemsPerPage]);

  async function handleDeleteTransaction(referenceID, transcationType) {
    try {
      const res = await axios.delete(
        `${base_url}/${transcationType}/${referenceID}`
      );
      if (res.data.success) {
        if (transcationType === "income") RemoveIncome(amount);
        else RemoveExpense(amount);
        deleteTransaction(referenceID);

        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="w-full h-max flex justify-between p-2">
        <h2 className="font-semibold text-2xl">History</h2>
        <div className="flex gap-2 items-center">
          <Select
            color="brown"
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
      <Card className=" h-64 lg:h-[22.5rem] w-full overflow-auto dark:bg-gray-800 dark:text-white">
        <table className="w-full min-w-max table-auto text-left ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-sigmaPrimary text-white p-4"
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
            {alltransaction?.map(
              (
                { _id, date, transcationType, amount, category, description },
                index
              ) => (
                <tr
                  key={_id}
                  className="even:bg-gray-300 dark:even:bg-gray-700"
                >
                  <td className="p-4">
                    <Typography variant="small" className="font-normal">
                      {date.day}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" className="font-normal">
                      {transcationType}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" className="font-normal">
                      {"₹" + amount}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" className="font-normal">
                      {category}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" className="font-normal">
                      {description}
                    </Typography>
                  </td>
                  <td className="py-2 flex gap-1">
                    <Button size="sm" color="amber" className="p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                      </svg>
                    </Button>
                    <Button
                      size="sm"
                      color="red"
                      className="p-2"
                      onClick={() =>
                        handleDeleteTransaction(_id, transcationType)
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
      <div className="w-full flex items-center justify-center p-2">
        <Pagination />
      </div>
    </>
  );
};

export default ExpenseTable;
