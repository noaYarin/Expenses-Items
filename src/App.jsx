import "./App.css";
import Card from "./components/UI/Card";
import { ExpenseItem } from "./components/Expenses/ExpenseItem";
import expensesItems from "./assets/expensesItems.json";
import { NewExpense } from "./components/NewExpense/NewExpense";

function App() {
  const addExpenseHandler = (expenses) => {
    console.log(expenses);
  };

  return (
    <Card className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
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
}

export default App;
