import { create } from "zustand";

const useReportStore = create((set) => ({
  report: [],
  reportChange: 0,
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: 1,

  setReport: (report) =>
    set((state) => ({
      report: report,
    })),
  setCurrentPage: (currentPage) =>
    set((state) => ({
      currentPage: currentPage,
    })),
  setItemsPerPage: (itemsPerPage) =>
    set((state) => ({
      itemsPerPage: itemsPerPage,
    })),
  setTotalPages: (totalPages) =>
    set((state) => ({
      totalPages: totalPages,
    })),
  setReportChange: () =>
    set((state) => ({
      reportChange: state.reportChange + 1,
    })),
}));

export default useReportStore;
