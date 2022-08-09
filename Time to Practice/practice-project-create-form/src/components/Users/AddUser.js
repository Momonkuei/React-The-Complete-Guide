import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

const AddUser = props => {
	const [enterUsername, setEnteredUsername] = useState('');
	const [enterAge, setEnteredAge] = useState('');

	const usernameChangeHandler = event => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = event => {
		setEnteredAge(event.target.value);
	};

	const addUserHandler = event => {
		event.preventDefault();
		console.log(enterUsername, enterAge);
		setEnteredAge('');
		setEnteredUsername('');
	};

	return (
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
	);
};

export default AddUser;
