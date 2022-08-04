import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

/*
	讓新的值有ＩＤ
*/
const NewExpense = props => {
	const [isEditing, setisEditing] = useState(false);

	const saveExpenseDataHandler = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			/* 
				把 ExpenseForm 中的 expenseData 取出來解構 
				 function名稱 = 傳入的值 =>{
					物件名稱 ={
						解構傳入的值
					}
				 }
			 */
			id: Math.random().toString(),
		};
		// console.log(expenseData);
		props.onAddExpense(expenseData);
		setisEditing(false);
		/* 可以在這運行 */
	};

	const startEditingHandler = () => {
		setisEditing(true);
	};

	const closeEditingHandler = () => {
		setisEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCloseEditing={closeEditingHandler}
				/>
			)}
		</div>
	);

	// if (!isEditing) {
	// 	return (
	// 		<div className="new-expense">
	// 			<button onClick={startEditingHandler}>Add New Expense</button>

	// 			{/* <ExpenseForm 自己命名 ={function名稱 =傳入的值} /> */}
	// 		</div>
	// 	);
	// } else {
	// 	return (
	// 		<div className="new-expense">
	// 			<ExpenseForm
	// 				onSaveExpenseData={saveExpenseDataHandler}
	// 				onCloseEditing={closeEditingHandler}
	// 			/>
	// 		</div>
	// 	);
	// }
};

export default NewExpense;
