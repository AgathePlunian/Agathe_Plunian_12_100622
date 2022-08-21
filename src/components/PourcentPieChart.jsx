import React from 'react';
import { PieChart, Pie, Cell } from "recharts";
import PropTypes from 'prop-types'

/**
 * Render Pie Chart
 * @param {Object} value
 * @returns {ReactElement}
 */

// Create full and empty area 
 function PourcentPieChart({result}) {

    let score = "";
    
    if(result.data.score) {
        score = result.data.score;
    }

    else {
        score = result.data.todayScore
    }

    let newScore = score * 100;
    let total = 100 - newScore;
    
    const data = [
        {name: 'scoreUser', score: newScore},
        {name: 'totalScore', score: total},
    ];

    const COLORS = ['#FF0000', 'transparent'];
        
return (
    <div>
        <h2 className='pie-chart-title'>Score</h2>
        <p className='score-text'><span className='score-number'>{newScore} %</span>de votre objectif</p>
        
            <PieChart  width={200} height={200}>
                <Pie
                cornerRadius={40}
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                fill="#8884d8"
                dataKey="score"
                outerRadius={100} innerRadius={87}
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke='transparent'/>
                ))}
            </Pie>   
            </PieChart>

        </div>

    );
}

PourcentPieChart.propTypes  = {
    result: PropTypes.object,
};

  
export default PourcentPieChart;