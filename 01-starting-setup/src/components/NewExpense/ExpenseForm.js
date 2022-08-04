import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	/* [儲存的值,觸法要改變的方法(要改變的值)] = useState(初始值) */

	const titleChangeHandler = event => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = event => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = event => {
		setEnteredDate(event.target.value);
	};

	const closeEditingHandler = props.onCloseEditing;

	const submitHandler = event => {
		event.preventDefault();
		/* 取消預設行為 */

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		/* props.ExpenseForm 設定的名稱（要傳的值） */
		// console.log(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
		// closeEditingHandler();
		/* 也可在這運行 */
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="1"
						step="1"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2022-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className="new-expense__actions">
					<button type="button" onClick={closeEditingHandler}>
						{/* 可以在onClick直接引用 父元素傳遞下來的 props {props.onCloseEditing} */}
						Cnacel
					</button>
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
