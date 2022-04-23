import React from 'react';
const ExpenseInfo = (props) => {
    const expenseItem = props.title;
    const expensePrice = props.amount;
    return (
        <div className='expense-item__description'>
            <h2>{expenseItem}</h2>
            <div className='expense-item__price'>
                ${expensePrice}
            </div>
        </div>
    )
}

export default ExpenseInfo;