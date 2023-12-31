import './barchart.css';
import React from 'react';
function Barchart(props) {
  var barheight = '0%';
  if (props.maxValue > 0) {
    barheight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{height: barheight }}>
        </div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  )
}
export default Barchart;