import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

const ContentBlocker = (props) => {
  const navigate = useNavigate();

  return (
    <Card className=" w-full h-full flex justify-center  bg-gradient-to-r from-sigmaPrimary to-yellow-800 ">
      <CardBody>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className=" w-10 h-10 lg:w-16 lg:h-16"
        >
          <path
            fillRule="evenodd"
            d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
            clipRule="evenodd"
          />
        </svg>

        <Typography variant="h5" className="mb-2 text-white text-2xl">
          Unlock {props.headingText}
        </Typography>
        <Typography className="text-white">
          Elevate Your Experience! Grab Our Premium Membership - One Payment,
          Lifetime Benefits.Don't Miss Out!
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to="/pricing">
          <Button
            size="sm"
            variant="filled"
            className="flex items-center gap-2"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>{" "}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ContentBlocker;
