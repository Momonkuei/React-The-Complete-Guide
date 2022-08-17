import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErroeModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
	const [enterUsername, setEnteredUsername] = useState('');
	const [enterAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const usernameChangeHandler = event => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = event => {
		setEnteredAge(event.target.value);
	};

	const addUserHandler = event => {
		event.preventDefault();
		if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message:
					'Please enter a valid name and age (non-empty values).',
			});
			return;
		}
		// if (Number(enterAge) < 1) {
		// 	return;
		// }
		if (+enterAge < 1) {
			//使用＋號，確保是一個數值
			setError({
				title: 'Invalid age',
				message: 'please enter a valid age (>0).',
			});
			return;
		}
		// console.log(enterUsername, enterAge);
		//打算傳出enterUsername, enterAge
		props.onAddUser(enterUsername, enterAge);
		setEnteredAge('');
		setEnteredUsername('');
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErroeModal
					title={error.title}
					message={error.message}
					errorState={error}
					onConfirm={errorHandler}
				></ErroeModal>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enterUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor="age">Age(Years)</label>
					<input
						id="age"
						type="number"
						value={enterAge}
						onChange={ageChangeHandler}
					/>
					<Button type="submit">新增資料</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
