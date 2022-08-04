import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
	// const totalMaximum = Math.max(1, 2, 3);
	/* 在上述例子 數字組中，取出最大值，但是現在卻是一個對象數組 */
	const dataPointValues = props.dataPoints.map(datapoint => datapoint.value);
	const totalMaximum = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{props.dataPoints.map(dataPoint => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
