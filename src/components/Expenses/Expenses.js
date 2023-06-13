import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
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

  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSetFilterYear={setFilterYear} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
