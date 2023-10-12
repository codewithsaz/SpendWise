import React, { useState } from "react";
import {
  Card,
  Input,
  Select,
  Option,
  Button,
  Typography,
} from "@material-tailwind/react";
import validator from "validator";
import useTransactionStore from "../../store/transactionStore";
import useUserStore from "../../store/userStore";
import axios from "axios";
axios.defaults.withCredentials = true;

const AddExpense = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  const { setTransactionChange } = useTransactionStore((state) => ({
    setTransactionChange: state.setTransactionChange,
  }));
  const { addExpense } = useUserStore((state) => ({
    addExpense: state.addExpense,
  }));

  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");

    const formattedDay = `${day}-${month}-${year}`;

    return {
      day: formattedDay,
      month: Number(month),
      year,
    };
  }

  const [amout, setamout] = useState(0);
  const [amoutError, setamoutError] = useState(false);
  const [description, setdescription] = useState("");
  const [date, setdate] = useState({});
  const [category, setcategory] = useState("");

  function resetInputs() {
    setamout(0);
    setcategory("");
    setdescription("");
    setdate({});
  }

  const handleAddExpense = async () => {
    const transcationObj = {
      amount: amout,
      date: date,
      description: description,
      category: category,
    };
    console.log(transcationObj);
    if (!validator.isNumeric(amout)) {
      setamoutError(true);
    } else {
      try {
        const res = await axios.post(`${base_url}/expense/add`, transcationObj);
        if (res.data.success) {
          resetInputs();
          setTransactionChange();
          addExpense(amout);
        }
      } catch (error) {
        console.log(error);
        window.alert("Error found", error);
      }
    }
  };
  return (
    <>
      <Card color="transparent" shadow={false}>
        <form className=" w-auto">
          <div className="h-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <Input
              type="Number"
              size="lg"
              label="Amount"
              color="brown"
              value={amout}
              onChange={(e) => {
                setamoutError(false);
                setamout(e.target.value);
              }}
              error={amoutError}
            />
            <Input
              size="lg"
              label="Description"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
              color="brown"
            />
            <Input
              size="lg"
              label="Date"
              type="date"
              min="2022-04-01"
              max="2025-04-30"
              color="brown"
              onChange={(e) => {
                console.log(formatDate(e.target.value));
                setdate(formatDate(e.target.value));
              }}
            />
            <Select
              label="Select Expense Type"
              color="brown"
              className="text-black dark:text-white"
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
          </div>
          <Button
            className="mt-6 bg-sigmaPrimary"
            fullWidth
            onClick={handleAddExpense}
          >
            Add Expense
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddExpense;
