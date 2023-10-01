import React from "react";
import InnerRoutes from "../routes/InnerRoutes";
import UserNavbar from "../components/UserNavbar/UserNavbar";

const MainLayout = () => {
  return (
    <div>
      <UserNavbar />
      <InnerRoutes />
      Footer
    </div>
  );
};

export default MainLayout;
