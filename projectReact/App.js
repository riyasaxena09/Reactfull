import React,{ useState } from 'react';
import './App.css';
import Expense from './components/Expense';
import NewExpense from './components/NewExpense';
 const expenses=[
    {
      id:'1',
      title:"car1",
      date:new Date(),
      amount:100,
     

    },
    {
      id:'2',
      title:"car2",
      date:new Date(),
      amount:200
      
    },
    {
      id:'3',
      title:"car3",
      date:new Date(),
      amount:300
      

    },
     {
      id:'4',
      title:"car4",
      date:new Date(),
      amount:400
      

    }
  ];
export default function App() {

  const [exp,setexpenses]=useState(expenses);
  function dataadded(expense){
  setexpenses([expense,...exp]);
    
  }
console.log(exp)
  return (
   
       
        <div className='App'>
        
   <NewExpense adddata={dataadded}></NewExpense>
    <Expense items={exp}></Expense>
    
    </div>
   
  );
}
