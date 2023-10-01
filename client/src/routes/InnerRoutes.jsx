import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Leaderboard, Report, NotFound } from "../pages/index";

const InnerRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<Navigate to="/error" replace={true} />} />
      </Routes>
    </>
  );
};

export default InnerRoutes;
