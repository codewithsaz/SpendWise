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
import { toast } from "react-toastify";

import axios from "axios";
axios.defaults.withCredentials = true;

const AddIncome = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  const { setTransactionChange } = useTransactionStore((state) => ({
    setTransactionChange: state.setTransactionChange,
  }));
  const { addIncome } = useUserStore((state) => ({
    addIncome: state.addIncome,
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

  const handleAddIncome = async () => {
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
        const res = await axios.post(`${base_url}/income/add`, transcationObj);
        console.log(res);
        if (res.data.success) {
          resetInputs();
          addIncome(amout);
          setTransactionChange();
          toast.success("Income Added", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
              value={amout}
              color="brown"
              className="dark:text-white"
              onChange={(e) => {
                setamoutError(false);
                setamout(e.target.value);
              }}
              error={amoutError}
            />
            <Input
              size="lg"
              label="Description"
              color="brown"
              className="dark:text-white"
              value={description}
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
              className="dark:text-white"
              color="brown"
              onChange={(e) => {
                setdate(formatDate(e.target.value));
              }}
            />
            <Select
              label="Select Income Type"
              color="brown"
              className="dark:text-white"
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
          </div>
          <Button
            className="mt-6 bg-sigmaPrimary"
            fullWidth
            onClick={handleAddIncome}
          >
            Add Income
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddIncome;
