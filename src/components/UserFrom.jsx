import React, { useReducer } from "react";
import UserContactInputs from "./UserContactInputs";
import NavBar from "./NavBar";

const userContactState = {
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: ""
};

const userPersonalState = {};

const formReducer = (state, { field, value }) => {
	return {
		...state,
		[field]: value
	};
};

const UserFrom = () => {
	const [userState, contactDispatch] = useReducer(
		formReducer,
		userContactState
	);
	const [personalState, personalDispatch] = useReducer(
		formReducer,
		userPersonalState
	);

	const handleChange = e => {
		contactDispatch({ field: e.target.name, value: e.target.value });
	};

	const form = (
		<UserContactInputs handleChange={handleChange} stateObject={userState} />
	);
	return (
		<div>
			<div>
				<NavBar />
			</div>
			<div>{form}</div>
		</div>
	);
};

export default UserFrom;
