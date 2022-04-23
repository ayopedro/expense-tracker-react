import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import './css/Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [selectYear, setSelectYear] = useState('2020');

    const selectYearHandler = (selectYear) => {
        setSelectYear(selectYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        const expenseDateYear = expense.date.getFullYear().toString();

        return expenseDateYear === selectYear;
    })

    

    return (
        <Card className='expenses'>
             <ExpenseFilter 
            default={selectYear}
            onSelectYear={selectYearHandler} 
            />
            <ExpensesChart 
                expenses={filteredExpenses}
            />
            <ExpensesList 
                items={filteredExpenses}
            />
        </Card>
      
    )};

export default Expenses;