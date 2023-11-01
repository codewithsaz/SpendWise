import React from "react";
import useUserStore from "../../store/userStore";
useUserStore;

import rich from "../../assets/images/rich.png";
import budget from "../../assets/images/budget.png";
import piggybank from "../../assets/images/piggy-bank.png";

const Summarry = () => {
  const { user, expense, income, savings } = useUserStore((state) => ({
    user: state.user,
    expense: state.expense,
    income: state.income,
    savings: state.savings,
  }));

  return (
    <div className=" w-full h-full flex flex-col justify-around gap-2  rounded-lg ">
      <div className=" w-full h-full text-center flex  justify-center gap-2   rounded-lg">
        <div className=" w-full   text-center flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-900  rounded-lg">
          <div className="flex flex-col justify-center items-center w-14 p-2">
            <img src={rich} alt="" />
            <h1 className=" text-xl">Expense</h1>
          </div>
          <h1 className=" text-2xl text-red-500">{"₹" + expense}</h1>
        </div>
        <div className=" w-full  text-center flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-900   rounded-lg">
          <div className="flex flex-col justify-center items-center w-14 p-2">
            <img src={budget} alt="" />
            <h1 className=" text-xl">Income</h1>
          </div>
          <h1 className=" text-2xl text-green-500">{"₹" + income}</h1>
        </div>
      </div>

      <div className=" w-full h-full   text-center flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-900  rounded-lg">
        <div className="flex flex-col justify-center items-center w-14 p-2">
          <img src={piggybank} alt="" />
          <h1 className=" text-xl">Savings</h1>
        </div>
        <h1 className=" text-2xl text-sigmaPrimary">{"₹" + savings}</h1>
      </div>
    </div>
  );
};

export default Summarry;
