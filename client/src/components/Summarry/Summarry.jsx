import React from "react";

const Summarry = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-around gap-1  rounded-lg p-1 bg-gray-200 dark:bg-gray-900">
      <div className=" w-full h-full text-center flex  justify-center gap-2   rounded-lg">
        <div className=" w-full   text-center flex flex-col justify-center   rounded-lg">
          <h1 className=" text-2xl">Expense</h1>
          <h1 className=" text-xl text-red-500">18000</h1>
        </div>
        <div className=" w-full  text-center flex flex-col justify-center   rounded-lg">
          <h1 className=" text-2xl">Income</h1>
          <h1 className=" text-xl text-green-500">68000</h1>
        </div>
      </div>

      <div className=" w-full h-full   text-center flex flex-col justify-center  rounded-lg">
        <h1 className=" text-2xl">Savings</h1>
        <h1 className=" text-xl text-sigmaPrimary">50000</h1>
      </div>
    </div>
  );
};

export default Summarry;
