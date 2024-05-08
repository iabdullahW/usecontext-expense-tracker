import React from 'react';
import { useExpense } from './ExpenseContext';

function Summary() {
  const { expenses, budgets } = useExpense();

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalBudget = budgets.reduce((total, budget) => total + budget.limit, 0);
  const remainingBudget = totalBudget - totalExpenses;

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Summary</h2>
      <div className="mt-4">
        <p>Total Expenses: ${totalExpenses}</p>
        <p>Total Budget: ${totalBudget}</p>
        <p>Remaining Budget: ${remainingBudget}</p>
      </div>
    </div>
  );
}

export default Summary;
