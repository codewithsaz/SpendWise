import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {},
  name: "",
  expense: 0,
  income: 0,
  savings: 0,
  setUser: (user) =>
    set((state) => ({
      user: user,
      expense: Number(user.expense),
      income: Number(user.income),
      savings: Number(user.savings),
    })),
  addExpense: (expense) =>
    set((state) => ({
      expense: Number(state.expense) + Number(expense),
      savings: Number(state.savings) - Number(expense),
    })),
  RemoveExpense: (expense) =>
    set((state) => ({
      expense: Number(state.expense) - Number(expense),
      savings: Number(state.savings) + Number(expense),
    })),
  addIncome: (income) =>
    set((state) => ({
      income: Number(state.income) + Number(income),
      savings: Number(state.savings) + Number(income),
    })),
  RemoveIncome: (income) =>
    set((state) => ({
      income: Number(state.income) - Number(income),
      savings: Number(state.savings) - Number(income),
    })),
}));

export default useUserStore;
