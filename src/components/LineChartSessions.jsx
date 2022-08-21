import React from 'react';
import { Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types'

/**
 * LineChart construction with recharts components
 * @param {Object} data
 * @returns {ReactElement}
 */

 function LineChartSessions({result}) {
  
  // Custom date format
  let formatXAxis = (day) => {
    let days = ["L", "M", "M", "J", "V", "S", "D"];
    return (days[day-1])
  }
  
  // Custom legend
  let renderLegend = () => {
    return ( <h2>Durée moyenne des sessions</h2> )
  }

  //Custom Tooltip
  const LineChartTooltip = ({ payload, active }) =>{
    if (active) {
      return (
        <div className='tooltipChart'>
          <p className='tooltipLineChart '>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null
  };
  
  return (
  <ResponsiveContainer width="100%" height="100%" cornerRadius="5">
  <LineChart
      data={result.data.sessions}
      background={"#FF0000"}
      margin={{
        top: 40,
        right: 10,
        left: -50,
        bottom: 0,
      }}
    >
      <CartesianGrid width={0} />
      <XAxis dataKey="day" tick={{ fill: 'white' }} tickFormatter={formatXAxis} axisLine={false}  />
      <YAxis dataKey="sessionLength" tick={false}/>
      <Tooltip 
      cursor={{
        stroke: "rgba(0, 0, 0, 0.1)",
        strokeWidth: 50,
      }}
      content={<LineChartTooltip />}
      />
    
      <Legend content={renderLegend} layout="vetical" verticalAlign="top" align="left" />      
      <Line
        type='monotone'
        dataKey='sessionLength'
        stroke='rgba(255, 255, 255, 0.5)'
        dot={false}
        strokeWidth={3}
        
    />
    </LineChart>
    </ResponsiveContainer>
  );
}

LineChartSessions.propTypes  = {
  result: PropTypes.object,
};


export default LineChartSessions;