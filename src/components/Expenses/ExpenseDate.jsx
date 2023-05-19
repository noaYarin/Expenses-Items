import "./ExpenseDate.css";

export default function ExpenseDate({ date }) {
  const month = new Date(date).toLocaleDateString("en-US", { month: "long" });
  const day = new Date(date).toLocaleDateString("en-US", { day: "2-digit" });
  const year = new Date(date).getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expense-date-day">{day}</div>
    </div>
  );
}
