import "./App.css";
import Card from "./components/UI/Card";
import { ExpenseItem } from "./components/Expenses/ExpenseItem";
import expensesItems from "./assets/expensesItems.json";

function App() {
  return (
    <Card className="expenses">
      {expensesItems.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.car}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default App;
