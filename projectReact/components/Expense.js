import ExpenseList from './ExpenseList';
import React, { useState } from 'react';
import Card from './card';
import './expense.css';
import Expensechart from './Expensechart';
import ExpenseFilter from './ExpenseFilter';
function Expense(props) {
  const [filteredyear, setFilteredyear] = useState('2020')
  function filterChangeHandler(selectedyear) {
    setFilteredyear(selectedyear);
    console.log(filteredyear);
  }
  const FilteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredyear;
  });
 

  
  return (
    <li>
    <Card>
      <div className='whole'>
        <ExpenseFilter selected={filteredyear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        <Expensechart expenses={FilteredExpense}></Expensechart>
      <ExpenseList items={FilteredExpense}/>
      </div>
    </Card>

</li>
  );
}
export default Expense;