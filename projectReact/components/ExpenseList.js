import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
function ExpenseList(props){

if(props.items.length===0){
  return <h1 className="hy">content not found.</h1>;;
}
  let a='';
  if(props.items.length===1){
    a=<h1 className='hy'>add more</h1>;
  }
 
  return(
    <ul className='expense-list'>
      {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      {a}
    </ul>
  )
}
export default ExpenseList;