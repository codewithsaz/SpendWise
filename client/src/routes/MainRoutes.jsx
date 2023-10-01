import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register, Login, Home, NotFound, Pricing } from "../pages/index";
import InnerRoutes from "./InnerRoutes";
import MainLayout from "../layout/MainLayout";
const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/user/*" element={<MainLayout />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
