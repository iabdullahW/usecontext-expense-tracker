import React, { useState } from 'react';
import { useExpense } from './ExpenseContext';

function BudgetForm() {
  const { addBudget } = useExpense();
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category.trim() || !limit.trim()) return;
    addBudget({
      id: Math.random().toString(36).substr(2, 9),
      category,
      limit: +limit,
    });
    setCategory('');
    setLimit('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Set Budget</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-md mb-2 md:mb-0 w-full md:w-1/2"
          />
          <input
            type="number"
            placeholder="Limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            className="px-4 py-2 rounded-md w-full md:w-1/2"
          />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Set Budget
        </button>
      </form>
    </div>
  );
}

export default BudgetForm;
