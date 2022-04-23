import React from 'react';
import './css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import ExpenseInfo from './ExpenseInfo';
import Card from '../UI/Card';


const ExpenseItem = (props) => {

    return (<Card className='expense-item'>
       <ExpenseDate 
           date={props.date}
       />
        <ExpenseInfo
            title={props.title}
            amount={props.amount}
        />
    </Card>);
}

export default ExpenseItem;