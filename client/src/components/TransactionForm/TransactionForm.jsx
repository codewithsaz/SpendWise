import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  Input,
  Select,
  Option,
  Button,
  Typography,
} from "@material-tailwind/react";
import AddExpense from "../AddTranscations/AddExpense";
import AddIncome from "../AddTranscations/AddIncome";

const TransactionForm = () => {
  const data = [
    {
      label: "Expense",
      value: "expense",
    },
    {
      label: "Income",
      value: "income",
    },
  ];

  return (
    <div className=" w-full h-max rounded-lg  bg-gray-200 dark:bg-gray-900">
      <Tabs value="expense">
        <TabsHeader className=" dark:bg-sigmaBackground dark:text-white">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="dark:text-sigmaPrimary">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel key="expense" value="expense">
            <AddExpense />
          </TabPanel>
          <TabPanel key="income" value="income">
            <AddIncome />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TransactionForm;
