import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types'

/**
 * Render Pie Chart
 * @param {Object} value
 * @returns {ReactElement}
 */

 function RadarChartSession({result}) {

  // Format X axis label
  let formatXAxis = (kindId) => { 
    let kindName = result.data.kind[kindId + 1];
    return (kindName);
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart 
        
        cx={'50%'}
        cy={'50%'}
        outerRadius="60%" 
        data = {result.data.data}
      >
        <PolarGrid />
        <PolarAngleAxis tickFormatter={formatXAxis} tick={{ fill: 'white' }} />

        <Radar
          name="kind"
          dataKey="value"
          stroke="transparent"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
      </ResponsiveContainer>
  );
}

RadarChartSession.propTypes  = {
  result: PropTypes.object,
};

export default RadarChartSession;