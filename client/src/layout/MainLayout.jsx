import React from "react";
import InnerRoutes from "../routes/InnerRoutes";
import UserNavbar from "../components/UserNavbar/UserNavbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="w-full h-full">
      <UserNavbar />
      <InnerRoutes />
      <Footer />
    </div>
  );
};

export default MainLayout;
