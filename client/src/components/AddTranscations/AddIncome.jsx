import React from "react";
import { Card, Input, Select, Option, Button } from "@material-tailwind/react";

const AddIncome = () => {
  return (
    <>
      <Card color="transparent" shadow={false}>
        <form className=" w-auto">
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 ">
            <Input type="Number" size="lg" label="Amount" />
            <Input size="lg" label="Description" />
            <Select label="Select Income Source">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <Button className="mt-6 bg-sigmaPrimary" fullWidth>
            Add Income
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddIncome;
