import React from 'react';
import './chart.css';
import Barchart from './barchart';
function Chart(props){

  const datapointsvalue=props.dataPoints.map(dataPoint => dataPoint.value);
    const totalmax=Math.max(...datapointsvalue);
  return(
    <div className='chart'>
      {props.dataPoints.map((dataPoint)=>(
      <Barchart
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalmax}
        label={dataPoint.label}
        />
    ))}
    </div>
  );
}
export default Chart;