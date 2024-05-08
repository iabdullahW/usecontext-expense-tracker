import React from 'react';
import { useExpense } from './ExpenseContext';

function BudgetList() {
  const { budgets, deleteBudget } = useExpense();

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Budget List</h2>
      <ul className="mt-4">
        {budgets.map((budget, index) => (
          <li key={index} className="flex justify-between items-center border-b-2 py-2">
            <span>{budget.category}</span>
            <span>${budget.limit}</span>
            <button onClick={() => deleteBudget(index)} className="text-red-500 hover:text-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BudgetList;
