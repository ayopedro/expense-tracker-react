import React from "react";
import './css/Chart.css';
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxBarHeight = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map(dataPoint => 
        <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxBarHeight}
            label={dataPoint.label}
        />)}
    </div>
};

export default Chart;