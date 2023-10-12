import React, { useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";
import axios from "axios";
import ToogleThemeButton from "../toogleTheme/ToogleThemeButton";
axios.defaults.withCredentials = true;

const profileMenuItems = [
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
function ProfileMenu() {
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;
  const { user, setUser } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${base_url}/user/logout`);
      console.log(res.data);
      if (res.data.success) {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-0.5 pl-0.5 "
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 dark:bg-sigmaBackground">
        <Typography className="font-normal px-2 py-0.5  text-transform: capitalize text-black dark:text-white">
          {"Hi, " + user.name}
        </Typography>
        {user?.isPremium && (
          <Typography
            to="/pricing"
            className="font-normal px-2  text-transform: capitalize text-black dark:text-white"
          >
            <Link to="/pricing">Membership</Link>
          </Typography>
        )}
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
                onClick={handleLogout}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
const UserNavbar = () => {
  const { user, setUser } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black dark:text-white">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <Link to="/user/">Dashboard</Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <Link to="/user/leaderboard">Leaderboard </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <Link to="/user/report">Report </Link>
      </Typography>
      <ToogleThemeButton />
    </ul>
  );
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-2 lg:px-8 lg:py-2 border-0 dark:bg-sigmaBackground  dark:shadow-gray-900">
      <div className="flex items-center justify-between ">
        <Typography className="mr-4 cursor-pointer py-1 font-extrabold text-3xl text-sigmaPrimary">
          <Link to="/">
            SpendWise
            {user?.isPremium && (
              <sup className=" text-xs text-yellow-900">PREMIUM</sup>
            )}
          </Link>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block text-black dark:text-white">
            {navList}
          </div>
          {user?.isPremium ? (
            ""
          ) : (
            <Button
              size="sm"
              className="hidden lg:inline-block bg-sigmaPrimary"
              onClick={() => {
                navigate("/pricing");
              }}
            >
              <span>Buy Premium</span>
            </Button>
          )}

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
                className="h-6 w-6 text-black dark:text-white"
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
                className="h-6 w-6 text-black dark:text-white"
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
          <ProfileMenu />
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        {user?.isPremium ? (
          ""
        ) : (
          <Button size="sm" fullWidth className="mb-2 bg-sigmaPrimary">
            <span>Buy Premium</span>
          </Button>
        )}
      </Collapse>
    </Navbar>
  );
};

export default UserNavbar;
