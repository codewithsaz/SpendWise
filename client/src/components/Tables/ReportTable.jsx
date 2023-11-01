import React, { useEffect } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import Pagination from "../pagination/Pagination";
import axios from "axios";
import useReportStore from "../../store/reportStore";
axios.defaults.withCredentials = true;
const TABLE_HEAD = ["Date", "Action"];

const ReportTable = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  const { report, setReport, reportChange } = useReportStore((state) => ({
    report: state.report,
    setReport: state.setReport,
    reportChange: state.reportChange,
  }));
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${base_url}/report/all`);
        if (res.data.success) {
          setReport(res.data.reports);
        }
      } catch (error) {}
    }

    fetchData();
  }, [reportChange]);

  const handleOpenFile = (fileURL) => {
    window.open(fileURL);
  };
  return (
    <>
      {report.length > 0 && (
        <>
          <div className="h-max w-full flex flex-wrap justify-between p-4">
            <h2 className="font-semibold text-3xl">Previous Reports</h2>
          </div>
          <Card className=" h-max lg:h-auto w-full overflow-auto text-black dark:bg-gray-800 dark:text-white">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-sigmaPrimary text-white p-4"
                    >
                      <Typography
                        variant="small"
                        className="font-normal leading-none  dark:text-white"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {report.map(({ date, fileURL }, index) => (
                  <tr
                    key={index}
                    className="even:bg-gray-300 dark:even:bg-gray-700"
                  >
                    <td className="p-4">
                      <Typography variant="small" className="font-normal">
                        {date}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Button
                        className=" bg-sigmaPrimary"
                        onClick={() => handleOpenFile(fileURL)}
                      >
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <div className="w-full flex items-center justify-center p-2">
            {/* <Pagination /> */}
          </div>
        </>
      )}
    </>
  );
};

export default ReportTable;
