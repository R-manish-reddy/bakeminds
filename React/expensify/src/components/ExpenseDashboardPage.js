import React from 'react'
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
//import ExpenseListItem from './ExpenseListItem';

export const ExpenseDashboardPage = () => {
    return (
        <div>
        <ExpenseListFilters />
            <ExpenseList />
        </div>
    )
}



export default ExpenseDashboardPage;
