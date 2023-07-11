
import React from 'react';
import Chart from './chart';
function ExpenseChart(props){
  const chartdatapoints=[
    {label: 'jan' ,value:0},
      {label: 'feb' ,value:0},
      {label: 'mar' ,value:0},
    {label: 'apr' ,value:0},
    {label: 'may' ,value:0},
    {label: 'june' ,value:0},
    {label: 'july' ,value:0},
  
      {label:'aug' ,value:0},
     
       {label:'sep' ,value:0},
       {label:'oct' ,value:0},
     {label:'nov' ,value:0},
       {label:'dec' ,value:0},
  ];
  for(const expense of props.expenses){
    const expensemonth=expense.date.getMonth();
    chartdatapoints[expensemonth].value+=expense.amount;
  }
  return <Chart dataPoints={chartdatapoints}/>
};
export default ExpenseChart;