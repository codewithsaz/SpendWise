import React from "react";
import LeaderboardTable from "../components/Tables/LeaderboardTable";
import { Button } from "@material-tailwind/react";
import ReportTable from "../components/Tables/ReportTable";
import axios from "axios";
axios.defaults.withCredentials = true;
import useReportStore from "../store/reportStore";

const Report = () => {
  const base_url = import.meta.env.VITE_BASE_URL;
  const { setReportChange } = useReportStore((state) => ({
    setReportChange: state.setReportChange,
  }));
  async function handleReportGeneration() {
    try {
      const res = await axios.get(`${base_url}/report/download`);
      if (res.data.success) {
        setReportChange();
      }
    } catch (error) {}
  }
  return (
    <div className=" h-[82vh] sm:h-[85vh] md:h-[86vh] w-full flex flex-col justify-start items-start  p-2 ">
      <div className="w-full mt-5 flex justify-between ">
        <p className=" md:text-2xl">
          Review your transaction offline, generate a report in excel format
        </p>
        <Button className=" bg-sigmaPrimary" onClick={handleReportGeneration}>
          Generate Report
        </Button>
      </div>
      <ReportTable />
    </div>
  );
};

export default Report;
