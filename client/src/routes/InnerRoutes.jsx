import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Dashboard,
  Leaderboard,
  Report,
  ContentBlockedPage,
} from "../pages/index";
import useUserStore from "../store/userStore";
const InnerRoutes = () => {
  const { user, setUser } = useUserStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));
  return (
    <>
      {user?.name ? (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/leaderboard"
            element={
              user?.isPremium ? (
                <Leaderboard />
              ) : (
                <ContentBlockedPage heading="Leaderboard" />
              )
            }
          />
          <Route
            path="/report"
            element={
              user?.isPremium ? (
                <Report />
              ) : (
                <ContentBlockedPage heading="Report" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/error" replace={true} />} />
        </Routes>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
};

export default InnerRoutes;
