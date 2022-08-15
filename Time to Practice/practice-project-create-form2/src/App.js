import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import './App.css';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setUsersList(prevUsersList => {
			return [
				...prevUsersList,
				{ id: Math.random().toString(), name: uName, age: uAge },
			];
		});
	};

	return (
		<div>
			<AddUser onAdduser={addUserHandler} />
			<UserList users={usersList} />
		</div>
	);
}

export default App;
