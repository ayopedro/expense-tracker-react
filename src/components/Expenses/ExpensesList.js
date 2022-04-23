import React from "react";
import './css/ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
    let expensesContent;
    if(props.items.length !== 0){
        expensesContent = props.items.map(item => (
            <ExpenseItem 
                key={item.id}
                title={item.title} 
                amount={item.amount} 
                date={item.date} 
            />
            )
            );
    } else{
        expensesContent = <h2 className="expenses-list__fallback">
        No found Expenses!
        </h2>;
    }

    return (
    <ul className="expenses-list">
        <li>{expensesContent}</li>
    </ul>)
};

export default ExpensesList;