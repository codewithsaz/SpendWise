import React from "react";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import Summarry from "../components/Summarry/Summarry";
import MonthAnalyticsChart from "../components/Charts/MonthAnalyticsChart";
import CatergoryAnalytics from "../components/Charts/CatergoryAnalytics";
import ExpenseTable from "../components/Tables/ExpenseTable";

const Dashboard = () => {
  return (
    <main className=" h-full w-full flex flex-col lg:flex-row justify-evenly items-center  p-2 ">
      <section className="w-full lg:w-96 flex flex-col  p-2 gap-2">
        <div className=" w-full h-48 lg:h-80  rounded-lg p-2 bg-gray-200 dark:bg-gray-900">
          <Summarry />
        </div>
        <div className=" w-full h-max lg:h-[30rem]  rounded-lg p-2 bg-gray-200 dark:bg-gray-900">
          <TransactionForm />
        </div>
      </section>
      <section className=" w-full h-max  flex flex-col  p-1 gap-2">
        <section className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-2 ">
          <div className=" w-full h-56 lg:h-80  rounded-lg p-2 bg-gray-200 dark:bg-gray-900">
            <MonthAnalyticsChart />
          </div>
          <div className=" w-full h-max lg:h-80  rounded-lg flex items-center  bg-gray-200 dark:bg-gray-900">
            <CatergoryAnalytics />
          </div>
        </section>
        <section className=" w-full h-72 lg:h-[30rem] rounded-lg p-2 bg-gray-200 dark:bg-gray-900 overflow-auto">
          <ExpenseTable />
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
