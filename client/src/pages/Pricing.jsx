import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import HomeNavbar from "../components/HomeNavbar/HomeNavbar";
import useUserStore from "../store/userStore";
import UserNavbar from "../components/UserNavbar/UserNavbar";
import premiumMember from "../assets/images/premiumMember.png";
import BuyPremiumButton from "../components/BuyPremiumButton/BuyPremiumButton";

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
  const { user, setUser } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));

  return (
    <>
      <div className="w-full h-max">
        {user?.name ? <UserNavbar /> : <HomeNavbar />}
      </div>

      {user?.isPremium ? (
        <div className="w-full h-max   md:h-[90vh] flex flex-col justify-center items-center p-3 gap-3 lg:flex-row">
          <div className=" flex flex-col md:max-w-2xl lg:max-w-2xl justify-center items-center text-center gap-2 lg:text-left lg:items-start mt-5">
            <h1 className=" text-6xl lg:text-8xl text-sigmaPrimary mb-1">
              Hooray🎉
            </h1>
            <h1 className=" text-2xl ">
              Congratulations on Unlocking Premium Membership! Enjoy Exclusive
              Benefits and Endless Possibilities.
            </h1>
            <h1 className=" text-3xl lg:text-4xl text-sigmaPrimary md:mt-5">
              Membership Benefits
            </h1>
            <ul className=" list-inside list-disc text-xl">
              <li>Graphical Analysis</li>
              <li>Leaderboard</li>
              <li>Generate and Download Report</li>
              <li>One year free updates</li>
              <li>Life time technical support</li>
            </ul>
          </div>
          <div className="h-96 lg:h-auto  m-4 ">
            <img
              className="w-full max-w-xl h-full object-fill"
              src={premiumMember}
              alt="Premium Member"
            />
          </div>
        </div>
      ) : (
        <div className="w-full h-max md:h-[90vh]  flex flex-col justify-center items-center p-3 gap-3 lg:flex-row">
          <div className=" flex flex-col md:max-w-2xl lg:max-w-2xl justify-center items-center text-center gap-2 lg:text-left lg:items-start mt-5">
            <h1 className=" text-6xl text-sigmaPrimary">
              Best no-tricks pricing
            </h1>
            <h1 className=" text-2xl ">
              If you are not satisfied, contact us within the first 30 days and
              we will send you a full refund.
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
                    Graphical Analysis
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
                  <Typography className="font-normal">
                    Donwload Report
                  </Typography>
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
              <BuyPremiumButton />
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default Pricing;
