import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";

import useTransactionStore from "../../store/transactionStore";
import useUserStore from "../../store/userStore";
import axios from "axios";
axios.defaults.withCredentials = true;

const EditTransaction = ({ isOpen, onClose, transactionDetails }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(isOpen);
  console.log(isOpen, transactionDetails);
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    onClose(); // Notify the parent component about the close action
  };

  const { setTransactionChange } = useTransactionStore((state) => ({
    setTransactionChange: state.setTransactionChange,
  }));

  const { RemoveIncome, RemoveExpense, addIncome, addExpense } = useUserStore(
    (state) => ({
      RemoveIncome: state.RemoveIncome,
      RemoveExpense: state.RemoveExpense,
      addIncome: state.addIncome,
      addExpense: state.addExpense,
    })
  );

  const base_url = import.meta.env.VITE_BASE_URL;

  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");

    const formattedDay = `${day}-${month}-${year}`;

    return {
      day: formattedDay,
      month: Number(month),
      year,
    };
  }

  function reverseDate(inputDate) {
    if (inputDate?.length > 0) {
      const parts = inputDate.split("-");
      const reversedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      return reversedDate;
    }
  }

  const [amount, setamount] = useState(transactionDetails?.amount);
  const [description, setdescription] = useState(
    transactionDetails?.description
  );
  const [date, setdate] = useState(transactionDetails?.date.day);
  const [category, setcategory] = useState(transactionDetails?.category);

  function resetInputs() {
    setamount(0);
    setcategory("");
    setdescription("");
    setdate({});
  }

  const handleUpdateIncome = async () => {
    const transcationObj = {
      amount: amount,
      date: formatDate(date),
      description: description,
      category: category,
    };
    try {
      const res = await axios.put(
        `${base_url}/income/${transactionDetails?._id}`,
        transcationObj
      );
      if (res.data.success) {
        resetInputs();
        RemoveIncome(transactionDetails.amount);
        addIncome(amount);
        setTransactionChange();
        handleDialogClose();
      }
    } catch (error) {
      console.log(error);
      handleDialogClose();
      window.alert("Error found", error);
    }
  };

  const handleUpdateExpense = async () => {
    const transcationObj = {
      amount: amount,
      date: formatDate(date),
      description: description,
      category: category,
    };

    try {
      const res = await axios.put(
        `${base_url}/expense/${transactionDetails?._id}`,
        transcationObj
      );
      if (res.data.success) {
        resetInputs();
        setTransactionChange();
        RemoveExpense(transactionDetails.amount);
        addExpense(amount);
        handleDialogClose();
      }
    } catch (error) {
      console.log(error);
      handleDialogClose();

      window.alert("Error found", error);
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        handler={handleDialogClose}
        className="dark:bg-gray-900 dark:text-white"
      >
        <div className="flex items-center justify-between">
          <DialogHeader className="dark:text-white">
            Update {transactionDetails?.transcationType}
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleDialogClose}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input
              type="Number"
              size="lg"
              label="Amount"
              color="brown"
              value={amount}
              className="dark:text-white"
              onChange={(e) => {
                setamount(e.target.value);
              }}
            />
            <Input
              size="lg"
              label="Description"
              value={description}
              color="brown"
              className="dark:text-white"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <Input
              size="lg"
              label="Date"
              type="date"
              min="2022-04-01"
              max="2025-04-30"
              color="brown"
              className="dark:text-white"
              value={reverseDate(date)}
              onChange={(e) => {
                setdate(e.target.value);
              }}
            />
            {transactionDetails?.transcationType === "expense" ? (
              <Select
                label="Select Expense Type"
                color="brown"
                value={category}
                className="dark:text-white"
                onChange={(e) => {
                  setcategory(e);
                }}
              >
                <Option value="Food">Food</Option>
                <Option value="Vehicle">Vehicle</Option>
                <Option value="Commute">Commute</Option>
                <Option value="Vacation">Vacation</Option>
                <Option value="Utilities">Utilities</Option>
              </Select>
            ) : (
              <Select
                label="Select Income Type"
                color="brown"
                className="dark:text-white"
                value={transactionDetails?.category}
                onChange={(e) => {
                  setcategory(e);
                }}
              >
                <Option value="Salary">Salary</Option>
                <Option value="Loan">Loan</Option>
                <Option value="Trading">Trading</Option>
                <Option value="Interest">Interest</Option>
                <Option value="Other">Other</Option>
              </Select>
            )}
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="gradient"
            color="green"
            onClick={
              transactionDetails?.transcationType === "expense"
                ? handleUpdateExpense
                : handleUpdateIncome
            }
          >
            Update
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default EditTransaction;
