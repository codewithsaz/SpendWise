import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

const UserNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Dashboard
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Leaderboard
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Pricing
        </a>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-2 lg:px-8 lg:py-2 border-0 dark:bg-sigmaBackground  dark:shadow-gray-900">
      <div className="flex items-center justify-between ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1 font-extrabold text-3xl text-sigmaPrimary"
        >
          SpendWise
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block text-black dark:text-white">
            {navList}
          </div>
          <Button size="sm" className="hidden lg:inline-block bg-sigmaPrimary">
            <span>Login</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </Collapse>
    </Navbar>
  );
};

export default UserNavbar;
