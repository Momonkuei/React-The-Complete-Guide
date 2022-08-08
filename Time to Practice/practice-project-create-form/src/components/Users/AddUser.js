import React from 'react';

const AddUser = props => {
	const addUserHandler = () => {};

	return (
		<form onSubmit={addUserHandler}>
			<label htmlFor="username">Username</label>
			<input id="username" type="text" />
			<label htmlFor="age">Age(Years)</label>
			<input id="age" type="number" />
			<button type="submit">新增資料</button>
		</form>
	);
};

export default AddUser;
