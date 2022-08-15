import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = props => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredUserage, setEnteredUserage] = useState('');
	const [error, setError] = useState();

	const addUserHandler = event => {
		event.preventDefault();
		if (
			enteredUsername.trim().length === 0 ||
			enteredUserage.trim().length === 0
		) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age(non-empty values).',
			});
			return;
		}
		if (+enteredUserage < 0) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age( > 0).',
			});
			return;
		}
		console.log(enteredUsername, enteredUserage);
		props.onAdduser(enteredUsername, enteredUserage);
		setEnteredUsername('');
		setEnteredUserage('');
	};

	const usernameChangeHandler = event => {
		setEnteredUsername(event.target.value);
	};

	const userageChangeHandler = event => {
		setEnteredUserage(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			{/* 如果是空值就跳出如果不是就顯示 ErrorModal*/}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						onChange={usernameChangeHandler}
						id="username"
						type="text"
						value={enteredUsername}
					/>

					<label htmlFor="age">Age</label>
					<input
						onChange={userageChangeHandler}
						id="age"
						type="number"
						value={enteredUserage}
					/>

					<Button type="submit">新增資料</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
