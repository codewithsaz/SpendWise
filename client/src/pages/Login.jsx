import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Login_Img from "../assets/images/Login_Img.png";
import { Link, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
axios.defaults.withCredentials = true;

import useUserStore from "../store/userStore";

const Login = () => {
  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_BASE_URL;

  const { setUser } = useUserStore((state) => ({
    setUser: state.setUser,
  }));

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!validator.isEmail(email)) {
      setEmailError(true);
    } else {
      const loginObj = {
        email: email,
        password: password,
      };

      console.log(email, password);

      try {
        const res = await axios.post(`${base_url}/user/login`, loginObj);
        console.log(res.data);
        if (res.data.success) {
          const userdata = res.data.user;
          console.log(userdata);
          setUser(userdata);
          console.log(userdata);
          navigate("/user/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-max place-items-center p-3"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
          <img
            className="h-80 w-full rounded-lg object-contain"
            src={Login_Img}
            alt="nature image"
          />
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Email"
            size="lg"
            autoComplete="email"
            onChange={(e) => {
              setEmailError(false);
              setEmail(e.target.value);
            }}
            error={emailError}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button className=" bg-sigmaPrimary" fullWidth onClick={handleLogin}>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              variant="small"
              className="ml-1 font-bold text-sigmaPrimary"
            >
              <Link to="/register">Sign up</Link>
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
