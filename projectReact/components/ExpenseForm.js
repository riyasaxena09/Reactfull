
import React, { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm(props) {
  var [enteredtitle, setenteredtitle] = useState('');
  var [enteredamount, setenteredamount] = useState('');
  var [entereddate, setentereddate] = useState('');
  function titlehandler(e) {
    setenteredtitle(e.target.value);
    //console.log(am)
  }
  function amounthandler(e) {
    setenteredamount(e.target.value);

  }
  function datehandler(e) {
    setentereddate(e.target.value);
    // console.log(dat)
  }
  function submit(e) {
    e.preventDefault();
    const expenses = {
      title: enteredtitle,
      date: new Date(entereddate),
      amount: +enteredamount,

    }
    props.onSavedata(expenses);
    setenteredtitle('');
    setenteredamount('');
    setentereddate('');
  }

  return (

    <form onSubmit={submit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control input'>

          <label>Title</label>
          <input id="t" type="text" value={enteredtitle} onChange={titlehandler}></input>
        </div>
        <div className='new-expense__control input'>
          <label>Amount</label>
          <input id="a" type="number" value={enteredamount} onChange={amounthandler} ></input>

        </div>
        <div className='new-expense__control input'>
          <label>Date</label>
          <input id="d" type="date" value={entereddate} onChange={datehandler}></input>

        </div>
        <div className='new-expense__actions'>
          <button type="button" onClick={props.onCancel}>cancel</button>
          <button type="submit">ADD Expense</button>
        </div>
      </div>
    </form>



  );
}
export default ExpenseForm;