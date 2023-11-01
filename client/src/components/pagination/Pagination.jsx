import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import useTransactionStore from "../../store/transactionStore";
import axios from "axios";
axios.defaults.withCredentials = true;

const Pagination = () => {
  const base_url = import.meta.env.VITE_BASE_URL;

  const {
    alltransaction,
    totalPages,
    itemsPerPage,
    currentPage,
    setHistory,
    setCurrentPage,
    setTotalPages,
    setItemsPerPage,
  } = useTransactionStore((state) => ({
    alltransaction: state.alltransaction,
    totalPages: state.totalPages,
    itemsPerPage: state.itemsPerPage,
    currentPage: state.currentPage,
    setHistory: state.setHistory,
    setCurrentPage: state.setCurrentPage,
    setTotalPages: state.setTotalPages,
    setItemsPerPage: state.setItemsPerPage,
  }));
  const [active, setActive] = React.useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  async function handleContent(crntPage) {
    try {
      const res = await axios.get(
        `${base_url}/transaction/all?page=${crntPage}&size=${itemsPerPage}`
      );
      if (res.data.success) {
        setHistory(res.data.history);
        setTotalPages(res.data.totalPages);
        setCurrentPage(res.data.currentPage);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    // color: "deep-purple",
    className:
      active === index ? "bg-sigmaPrimary dark:text-white" : "dark:text-white",
    onClick: () => {
      setActive(index);
      handleContent(index);
    },
  });

  const next = () => {
    if (active === totalPages) return;

    setActive(active + 1);
    handleContent(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
    handleContent(active - 1);
  };

  return (
    <div className=" w-96 sm:w-auto flex items-center gap-1 sm:gap-4 dark:text-white">
      <Button
        variant="text"
        className="flex items-center gap-1 sm:gap-2 dark:text-white"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-1 sm:gap-2 overflow-auto  ">
        {pageNumbers.map((pageNumber) => (
          <IconButton key={pageNumber} {...getItemProps(pageNumber)}>
            {pageNumber}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 dark:text-white"
        onClick={next}
        disabled={active === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
