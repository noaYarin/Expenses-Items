import "./ExpenseForm.css";
import { useState } from "react";

export const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "$200",
    pickedDate: "2021-02-13",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: e.target.value,
      };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: e.target.value,
      };
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        pickedDate: e.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { enteredTitle, enteredAmount, pickedDate } = userInput;

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(pickedDate),
    };
    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      pickedDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-30"
            value={userInput.pickedDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense-actions">
          <button type="submit" className="btn">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};
