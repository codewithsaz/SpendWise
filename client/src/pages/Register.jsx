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
import SignUp_Img from "../assets/images/SignUp_Img.png";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import React, { useState } from "react";
import validator from "validator";
axios.defaults.withCredentials = true;

const Register = () => {
  const navigate = useNavigate();

  const base_url = import.meta.env.VITE_BASE_URL;

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState(false);
  const [password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    const regUserObj = {
      name: name,
      email: email,
      password: password,
    };
    console.log(regUserObj);
    if (!validator.isEmail(email)) {
      setemailError(true);
    } else {
      try {
        const res = await axios.post(`${base_url}/user/register`, regUserObj);
        console.log(res);
        if (res.data.success) navigate("/login");
      } catch (error) {
        setErrorMessage(error.response.data.message);
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
            Sign Up
          </Typography>
          <img
            className="h-80 w-full rounded-lg object-contain"
            src={SignUp_Img}
            alt="nature image"
          />
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            autoComplete="name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <Input
            label="Email"
            size="lg"
            autoComplete="email"
            onChange={(e) => {
              setemailError(false);
              setemail(e.target.value);
            }}
            error={emailError}
          />
          <Input
            label="Password"
            size="lg"
            autoComplete="new-password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          {errorMessage.length > 0 && (
            <p
              id="errorMessenger"
              className=" text-red-700 text-sm m-0 p-0 text-center"
            >
              {errorMessage}
            </p>
          )}
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            className=" bg-sigmaPrimary"
            fullWidth
            onClick={handleRegister}
          >
            Sign Up
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already a user?
            <Typography
              variant="small"
              className="ml-1 font-bold text-sigmaPrimary"
            >
              <Link to="/login">Login</Link>
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
