//https://vscode.dev/tunnel/manjarodesktop/home/guillem/react/01-starting-setup
import React,{useState} from 'react';
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  
  const [expenseTitle,setTitle]=useState(props.title);
  const clickHandler=()=>{
    setTitle("updated")
    console.log(expenseTitle);
  }



  const [expenseAmount,setAmount] = useState(props.amount);
  const discountHandler = ()=>{
    let n=expenseAmount*0.8
    n=Math.round(n*100)/100
    setAmount(n)

  }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}€</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={discountHandler}>Apply discount</button>
    </Card>
  );
}
export default ExpenseItem;
