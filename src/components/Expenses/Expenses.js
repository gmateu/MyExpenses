import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const setFilterYear = (year) => {
    console.log("setFilterYear in Expenses.js", year);
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <h2>No items found.</h2>
  if (filteredExpenses.length > 0) {
    expensesContent=filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSetFilterYear={setFilterYear} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
