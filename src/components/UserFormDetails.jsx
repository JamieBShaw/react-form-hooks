import React from "react";
import { Input } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";

import Button from "@material-ui/core/Button/Button";

const UserFormDetails = props => {
	const continueButton = e => {
		e.preventDefault();
		props.continueHandler();
	};

	return (
		<>
			<AppBar color="primary" position="static" title="Enter User Details">
				<div>Form</div>
			</AppBar>
			{Object.keys(props.stateObject).map(key => {
				return (
					<div style={{ marginTop: "20px" }} key={key}>
						<div>
							<label> {key.toString().toUpperCase()}</label>
						</div>

						<Input
							name={key.toString()}
							value={props.stateObject[key]}
							onChange={props.handleChange}
							defaultValue={"Enter " + key.toString().toLowerCase()}
						/>
						<br />
					</div>
				);
			})}

			<Button
				style={{ marginTop: "25px", textDecorationWidth: "2px" }}
				onClick={continueButton}>
				<span>CONTINUE</span>
			</Button>
		</>
	);
};

export default UserFormDetails;
