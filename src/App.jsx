import { ExpensesList } from "./components/Expenses/ExpensesList";
import React from "react";
import expensesItems from "../src/assets/expensesItems.json";
import { useState } from "react";
import { NewExpense } from "./components/NewExpense/NewExpense";

function App() {
  const [expensesList, setExpenses] = useState(expensesItems);

  const addExpenseHandler = (newExpense) => {
    return setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <React.Fragment>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesList expenses={expensesList} />
    </React.Fragment>
  );
}

export default App;
