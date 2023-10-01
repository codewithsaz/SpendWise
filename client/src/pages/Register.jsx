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

const Register = () => {
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
          <Input label="Name" size="lg" />
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button className=" bg-sigmaPrimary" fullWidth>
            Sign Up
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already a user?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              className="ml-1 font-bold text-sigmaPrimary"
            >
              Login
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
