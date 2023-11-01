import React from "react";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="flex w-auto h-max flex-wrap items-center justify-center py-4 px-10 text-center md:justify-between  ">
      <Typography className="font-normal">&copy; 2023 SpendWise</Typography>
      <Typography className="font-bold">
        Crafted with ❤️ by Saz Cherukat
      </Typography>
      {/* <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul> */}
    </footer>
  );
};

export default Footer;
