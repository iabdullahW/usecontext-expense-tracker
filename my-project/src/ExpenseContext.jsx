import React, { createContext, useContext, useState } from 'react';

const ExpenseContext = createContext();

export const useExpense = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((expense, idx) => idx !== index));
  };

  const addBudget = (budget) => {
    setBudgets([...budgets, budget]);
  };

  const deleteBudget = (index) => {
    setBudgets(budgets.filter((budget, idx) => idx !== index));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, budgets, addBudget, deleteBudget }}>
      {children}
    </ExpenseContext.Provider>
  );
};
