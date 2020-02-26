import React, { useReducer, useState } from "react";
import UserFormDetails from "./UserFormDetails";
import UserPersonalDetails from "./UserPersonalDetails";

const userFormDetailsState = {
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: ""
};

const userPersonalDetailsState = {
	occupation: "",
	city: "",
	bio: ""
};

const formReducer = (state, { field, value }) => {
	return {
		...state,
		[field]: value
	};
};

const UserFrom = () => {
	const [step, setStep] = useState(1);

	const [userState, contactDispatch] = useReducer(
		formReducer,
		userFormDetailsState
	);
	const [personalState, personalDispatch] = useReducer(
		formReducer,
		userPersonalDetailsState
	);

	const handleChange = e => {
		contactDispatch({ field: e.target.name, value: e.target.value });
	};

	const continueHandler = e => {
		setStep(step + 1);
	};

	const backHandler = e => {
		setStep(step - 1);
	};

	switch (step) {
		case 1:
			return (
				<UserFormDetails
					handleChange={handleChange}
					stateObject={userState}
					backHandler={backHandler}
					continueHandler={continueHandler}
				/>
			);
		case 2:
			return (
				<UserPersonalDetails
					handleChange={handleChange}
					stateObject={personalState}
					backHandler={backHandler}
					continueHandler={continueHandler}
				/>
			);
		case 3:
			return <h1> Confrim </h1>;
		case 4:
			return <h1> Success </h1>;

		default:
			break;
	}
};

export default UserFrom;
