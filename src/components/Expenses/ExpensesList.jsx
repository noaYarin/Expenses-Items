import Card from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";
import { ExpensesFilter } from "./ExpensesFilter";
import { useState } from "react";
import { ExpensesChart } from "./ExpensesChart";
import { useMemo } from "react";

export const ExpensesList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const getFilteredList = () => {
    if (!filteredYear) {
      return expenses;
    }
    return expenses.filter(
      (expense) => new Date(expense.date).getFullYear() === +filteredYear
    );
  };

  const expensesFilter = useMemo(getFilteredList, [filteredYear, expenses]);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <ExpensesChart expenses={expensesFilter} />
      {expensesFilter.length ? (
        expensesFilter.map((item, index) => (
          <ul className="expenses-list">
            <ExpenseItem
              key={index}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          </ul>
        ))
      ) : (
        <p className="no-results">No expenses found.</p>
      )}
    </Card>
  );
};
