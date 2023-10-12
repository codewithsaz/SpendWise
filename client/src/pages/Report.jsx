import React from "react";
import LeaderboardTable from "../components/Tables/LeaderboardTable";

const Report = () => {
  return (
    <div className=" h-[82vh] sm:h-[85vh] md:h-[86vh] w-full flex flex-col justify-start items-start  p-2 ">
      <LeaderboardTable />
    </div>
  );
};

export default Report;
