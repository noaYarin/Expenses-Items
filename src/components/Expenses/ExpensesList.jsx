import Card from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";
import expensesItems from "../../assets/expensesItems.json";
import { NewExpense } from "../NewExpense/NewExpense";
import "./ExpensesList.css";
import { ExpensesFilter } from "./ExpensesFilter";
import { useState } from "react";

export const ExpensesList = () => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const addExpenseHandler = (expenses) => {};

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      {expensesItems.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};
