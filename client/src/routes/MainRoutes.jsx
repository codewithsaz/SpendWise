import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Register,
  Login,
  Home,
  NotFound,
  Pricing,
  LoadingPage,
} from "../pages/index";
import InnerRoutes from "./InnerRoutes";
import MainLayout from "../layout/MainLayout";
import axios from "axios";
import useUserStore from "../store/userStore";
axios.defaults.withCredentials = true;
const MainRoutes = () => {
  const [loading, setloading] = useState(true);
  const { user, setUser } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));
  useEffect(() => {
    if (JSON.stringify(user) === "{}") {
      async function fetchData() {
        const res = await axios.get("http://localhost:8080/user/details");
        if (res.data.success) setUser(res.data.user);
      }
      fetchData();
    }
    setTimeout(() => {
      setloading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/user/*"
            element={user?.name ? <MainLayout /> : <Navigate to="/login" />}
          />
          <Route path="/error" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

export default MainRoutes;
