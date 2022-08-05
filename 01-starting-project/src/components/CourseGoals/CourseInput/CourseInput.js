import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = event => {
		/* 當判斷的值長度 > 0 時 把 isValid 轉為true值 */
		if (event.target.value.trim().length() > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = event => {
		event.preventDefault();

		if (enteredValue.trim().length === 0) {
			setIsValid(false);
			return;
		}

		props.onAddGoal(enteredValue);
		setEnteredValue('');
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="form-control">
				<label style={{ color: !isValid ? 'red' : 'black' }}>
					Course Goal
				</label>
				<input
					style={{
						borderColor: !isValid ? 'red' : '#ccc',
						background: !isValid ? 'salmon' : 'transparent',
					}}
					// 現在狀態是 行內樣式(Inline styles) 層級是最高的
					type="text"
					value={enteredValue}
					onChange={goalInputChangeHandler}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
