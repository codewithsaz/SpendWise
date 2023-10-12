import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {},
  name: "",
  expense: 0,
  income: 0,
  savings: 0,
  isPremium: false,
  setUser: (user) =>
    set((state) => ({
      user: user,
      expense: Number(user.expense),
      income: Number(user.income),
      savings: Number(user.savings),
      //   name: user.name,
      // isPremium: user.isPremium,
    })),
  addExpense: (expense) =>
    set((state) => ({
      expense: Number(state.expense) + Number(expense),
      savings: Number(state.savings) - expense,
    })),
  RemoveExpense: (expense) =>
    set((state) => ({
      expense: Number(state.expense) - expense,
      savings: Number(state.savings) + expense,
    })),
  addIncome: (income) =>
    set((state) => ({
      income: Number(state.income) + income,
      savings: Number(state.savings) + income,
    })),
  RemoveIncome: (income) =>
    set((state) => ({
      income: Number(state.income) - income,
      savings: Number(state.savings) - income,
    })),
}));

export default useUserStore;
