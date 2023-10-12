import React from "react";

const BuyPremiumButton = () => {
  async function handleBuyPremium() {
    const res = await axios.get("http://localhost:4000/purchase/premium", {
      headers: { Authorization: token },
    });

    const options = {
      key: res.data.key_id,
      order_id: res.data.order.id,
      handler: async function () {
        const response = await axios.post(
          "http://localhost:4000/purchase/confirm",
          {
            order_id: options.order_id,
            payment_id: res.razorpay_payment_id,
            payment_status: true,
          },
          {
            headers: { Authorization: token },
          }
        );
        console.log(response.data);
        newtoken = response.data.token;
        localStorage.setItem("token", newtoken);
        token = newtoken;

        alert("Your are a premium user");
        isUserpremium();
      },
    };

    const rzpObj = new Razorpay(options);
    rzpObj.open();
    event.preventDefault();

    rzpObj.on("payment.failed", async function (res) {
      await axios.post(
        "http://localhost:4000/purchase/confirm",
        {
          order_id: options.order_id,
          payment_id: res.razorpay_payment_id,
          payment_status: false,
        },
        {
          headers: { Authorization: token },
        }
      );
      alert("Something went wrong, try again later");
    });
  }
  return (
    <Button
      size="lg"
      className=" bg-sigmaPrimary hover:scale-105 "
      ripple={false}
      fullWidth={true}
    >
      Buy Now
    </Button>
  );
};

export default BuyPremiumButton;
