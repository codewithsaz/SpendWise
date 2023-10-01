import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
const Pricing = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-3 gap-3 lg:flex-row">
      <div className=" flex flex-col md:max-w-2xl lg:max-w-2xl justify-center items-center text-center gap-2 lg:text-left lg:items-start mt-5">
        <h1 className=" text-6xl text-sigmaPrimary">Best no-tricks pricing</h1>
        <h1 className=" text-2xl ">
          If you are not satisfied, contact us within the first 30 days and we
          will send you a full refund.
        </h1>
        <h1 className=" text-4xl text-sigmaPrimary md:mt-5">
          Lifetime Membership
        </h1>
        <h1 className=" text-xl ">
          You have Free Unlimited Updates and Premium Support.
        </h1>
      </div>
      <Card
        color="gray"
        variant="gradient"
        className="w-full max-w-[20rem] p-8"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            PREMIUM
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-2xl">₹</span>999{" "}
            <span className="self-end text-2xl">/lifetime</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Graphical Analytics
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">Leaderboard</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">Donwload Report</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                1 year free updates
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Life time technical support
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            className=" bg-sigmaPrimary hover:scale-105 "
            ripple={false}
            fullWidth={true}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Pricing;
