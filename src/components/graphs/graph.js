import React from 'react';
import { generateNumbers } from '../../helpers/generateNumbers';
import { Bar } from './bar';

export const Graph = (props) => {
    const nums = generateNumbers(100, 300);
    const bars = nums.map((n, i) => {
        return (
            <Bar key={i} height={n} width={5}/>
        )
    })
    return (
        <div className="graph">
            {bars}
        </div>
    )
}

