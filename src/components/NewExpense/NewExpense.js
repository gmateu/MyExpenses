import React,{useState} from "react"
import ExpenseForm  from "./ExpenseForm";

import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing,setIsEditing]=useState(false)
    
    const isEditingHandler = () => {
        if (isEditing){
            setIsEditing(false);
        }else{
            setIsEditing(true);
        }
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        isEditingHandler()
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={isEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm isEditingHandler={isEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );

}

export default NewExpense