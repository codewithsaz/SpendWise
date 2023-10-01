import React from "react";
import {
  Card,
  Input,
  Select,
  Option,
  Button,
  Typography,
} from "@material-tailwind/react";

const AddExpense = () => {
  return (
    <>
      <Card color="transparent" shadow={false}>
        <form className=" w-auto">
          <div className="h-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <Input type="Number" size="lg" label="Amount" />
            <Input size="lg" label="Description" />
            <Input size="lg" label="Description" />
            <Select label="Select Expense Type">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <Button className="mt-6 bg-sigmaPrimary" fullWidth>
            Add Expense
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddExpense;
