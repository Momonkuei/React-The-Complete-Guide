import React from 'react';

import './ChartBar.css';

const ChartBar = props => {
	let barFillHeight = '0%';

	if (props.maxValue > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
		/* 但在 Chart.js maxValue={null} */
	}

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					className="chart-bar__fill"
					style={{ height: barFillHeight }}
					// style={{'background-color':'red'}}
					// 會造成雙誇好的原因 一個花括號用於動態輸出某些東西，但是動態值是一個 jS對象，
					// 而它也是用 花括號創建的
				></div>
				{/* 要在char-bar__fill當中添加 css Height 元素 */}
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
};

export default ChartBar;
