import React from "react";
import { Input } from "@material-ui/core";

const UserContactInputs = props => {
	return (
		<div>
			{Object.keys(props.stateObject).map(key => {
				return (
					<div key={key}>
						<Input
							name={key.toString()}
							value={props.stateObject[key]}
							onChange={props.handleChange}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default UserContactInputs;
