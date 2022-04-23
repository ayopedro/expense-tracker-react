import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(true);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        defaultState();
    };
    const showFormToEdit = e => {
        setShowForm(false);
        e.preventDefault();
    }
    const defaultState = () => {
        setShowForm(true);
    }
    return (
        <div className="new-expense">
            {showForm ? 
            <button onClick={showFormToEdit}>Add New Expense</button> :
            <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler}
            onClosing={defaultState}
            />
            }
        </div>
    )
};

export default NewExpense;