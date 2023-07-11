import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
function NewExpense(props) {
  const [edit, editing] = useState(false);

  const datahandler = (enter) => {
    const ex = {
      id: Math.random().toString(),
      ...enter,

    };
    props.adddata(ex);
    editing(false);
    // console.log(ex);
  }
  function e() {
    editing(true);
  }
  function stopedit() {
    editing(false);
  }
  return (
    <div className='new-expense'>
      {!edit && <button onClick={e}>Add Expense</button>}
      {edit && <ExpenseForm onSavedata={datahandler} onCancel={stopedit}></ExpenseForm>

      }
    </div>
  );
}
export default NewExpense;