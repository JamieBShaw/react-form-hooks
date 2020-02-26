import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from "@material-ui/core/Button/Button";
import Input from "@material-ui/core/Input/Input";

const UserPersonalDetails = props => {
	const continueButton = e => {
		e.preventDefault();
		props.continueHandler();
	};

	const backButton = e => {
		e.preventDefault();
		props.backHandler();
	};
	return (
		<>
			<AppBar color="primary" position="static" title="Enter User Details">
				<div>Form</div>
			</AppBar>

			{Object.keys(props.stateObject).map(key => {
				return (
					<div key={key}>
						<Input
							name={key.toString()}
							value={props.stateObject[key]}
							onChange={props.handleChange}
						/>
						<br />
					</div>
				);
			})}

			<Button onClick={backButton}>Back</Button>
			<Button onClick={continueButton}> Continue </Button>
		</>
	);
};

export default UserPersonalDetails;
