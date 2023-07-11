
import React,{ useState } from 'react';
import './ExpenseItem.css';
import Card from './card';

import Expensedate from './Expensedate.jsx';
function ExpenseItem(props){
 const [title,titlehandler]=useState(props.title);
  const [amount,amounthandler]=useState(props.amount);
  function ahandler(){
    amounthandler("250");
  }
  function thandler(){
  titlehandler("update");
    console.log(title)
    ahandler();
  }
  return (
  
      <Card className="expense-item">
<div><Expensedate date={props.date}></Expensedate></div>
        
      <div className="expense-item__description">
     <h2>{title}</h2>
       <div className="expense-item__price">${amount}</div>
  <button onClick={thandler}>Change</button>
         </div>
</Card>
         );
    
}
export default ExpenseItem;