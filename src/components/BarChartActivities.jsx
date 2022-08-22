import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types'

/**
 * BarChart construction with recharts components
 * @param {object} data
 * @returns {ReactElement}
 */

function BarChartActivities({result}) { 
 //Custom tooltip
  function CustomTooltip({ payload, active }) {
    const tool2 = (payload, active) => {
        if (active && payload) {
        return (
            <div className='tooltipChart'>
              <p className='tooltipLineChart '>{`${payload[0].value}kg`}</p>
              <p className='tooltipLineChart '>{`${payload[1].value}Kcal`}</p>
            </div>
        );
      }
    };  
    return <div>{tool2(payload, active)}</div>;
  }
        

  // Custom legend
  let CustomizedLegend = () => {
    return (
      <ul className="legend-list">
        <li className="legend-item">Poids (kg)</li>
        <li className="legend-item">Calories brûlées</li>
      </ul>
    )
  }

  // Custom X axis label
  let formatXAxis = (tickItem) => {
    let date = new Date(tickItem);
    let day = date.getDate(); 
    return day.toString() 
  }

  return (
    <div>
    <h2 className="chart-title">Activité quotidienne</h2>
    <ResponsiveContainer height={300} width="100%">
      <BarChart data={result.data.sessions} margin={{ top: 5, right: 0, left:30, bottom: 5 }} >  
        <CartesianGrid strokeDasharray="2 2"/>
        
        <XAxis dataKey="day" tickFormatter={formatXAxis} tick={{ fill: '#9B9EAC' }} />
        
        <YAxis dataKey="calories" orientation='right' tick={{ fill: '#9B9EAC' }} />
        
        <Tooltip content={<CustomTooltip />}/>

        <Legend content={CustomizedLegend} verticalAlign="top" align="right" />

        <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
        
        <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}

BarChartActivities.propTypes  = {
    result: PropTypes.object,
};
    
export default BarChartActivities;


