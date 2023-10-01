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

const Login = () => {
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
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button className=" bg-sigmaPrimary" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              className="ml-1 font-bold text-sigmaPrimary"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
