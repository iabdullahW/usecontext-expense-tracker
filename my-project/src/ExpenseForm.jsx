import React, { useState } from 'react';
import { useExpense } from './ExpenseContext';

function ExpenseForm() {
  const { addExpense } = useExpense();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount.trim()) return;
    addExpense({
      id: Math.random().toString(36).substr(2, 9),
      description,
      amount: +amount,
    });
    setDescription('');
    setAmount('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Add Expense</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-col md:flex-row">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-2 rounded-md mb-2 md:mb-0 w-full md:w-1/2"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="px-4 py-2 rounded-md w-full md:w-1/2"
          />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
