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
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSetFilterYear={setFilterYear} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
