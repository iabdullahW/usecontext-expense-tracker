import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';
import Summary from './Summary';
import { ExpenseProvider } from './ExpenseContext';

function App() {
  return (
    <ExpenseProvider>
      <div className="App bg-gray-100 min-h-screen">
        <h1 className="text-3xl text-center font-semibold py-4">Expense Tracker</h1>
        <div className="container mx-auto px-4">
          <ExpenseForm />
          <ExpenseList />
          <BudgetForm />
          <BudgetList />
          <Summary />
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;
