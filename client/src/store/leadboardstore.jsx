import { create } from "zustand";

const useLeaderboardStore = create((set) => ({
  leaderboard: [],
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: 1,

  setLeaderboard: (leaderboard) =>
    set((state) => ({
      leaderboard: leaderboard,
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
}));

export default useLeaderboardStore;
