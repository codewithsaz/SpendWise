import React from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import useUserStore from "../../store/userStore";
axios.defaults.withCredentials = true;
const BuyPremiumButton = () => {
  const { user, setUser } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));
  async function handleBuyPremium(event) {
    const res = await axios.get("http://localhost:8080/purchase/premium");

    const options = {
      key: res.data.key_id,
      order_id: res.data.orderID,
      name: "SpenWise", //your business name
      description: "Test Transaction",
      handler: async function (response) {
        const res = await axios.post("http://localhost:8080/purchase/success", {
          orderID: response.razorpay_order_id,
          paymentID: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        });
        console.log(response);
        if (res.data.success) {
          const userdata = res.data.user;
          setUser(userdata);
        }
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: "9000090000",
      },
      theme: {
        color: "#9c27b0",
      },
    };

    const rzpObj = new Razorpay(options);
    rzpObj.open();
    event.preventDefault();

    rzpObj.on("payment.failed", async function (response) {
      console.log(response.error);
      const res = await axios.post("http://localhost:8080/purchase/failed", {
        orderID: response.error.metadata.order_id,
        paymentID: response.error.metadata.payment_id,
      });
      alert("Something went wrong, try again later");
    });
  }
  return (
    <Button
      size="lg"
      className=" bg-sigmaPrimary hover:scale-105 "
      ripple={false}
      fullWidth={true}
      onClick={handleBuyPremium}
    >
      Buy Now
    </Button>
  );
};

export default BuyPremiumButton;
