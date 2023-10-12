import { create } from "zustand";

const useLeaderboardStore = create((set) => ({
  leaderboard: [],
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: 1,
  //   transactionPerMonth: [],
  //   expensePerCategory: [],
  //   incomePerCategory: [],

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
  //   setTransactionPerMonth: (transactionPerMonth) =>
  //     set((state) => ({
  //       transactionPerMonth: transactionPerMonth,
  //     })),
  //   setExpensePerCategory: (expensePerCategory) =>
  //     set((state) => ({
  //       expensePerCategory: expensePerCategory,
  //     })),
  //   setincomePerCategory: (incomePerCategory) =>
  //     set((state) => ({
  //       incomePerCategory: incomePerCategory,
  //     })),

  //   deleteTransaction: (transactionId) =>
  //     set((state) => ({
  //       alltransaction: state.alltransaction.filter(
  //         (transaction) => transaction._id !== transactionId
  //       ),
  //     })),

  //   setTransactionChange: () =>
  //     set((state) => ({
  //       transactionChange: state.transactionChange + 1,
  //     })),
}));

export default useLeaderboardStore;
