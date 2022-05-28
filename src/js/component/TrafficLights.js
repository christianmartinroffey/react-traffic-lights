import React, { useState } from "react";

const TrafficLights = (props) => {
	const [color, setColor] = useState("red");

	return (
		<div className="container d-flex justify-content-center pt-5 ">
			<div className="bg-dark rounded-3 p-3">
				<div>thestick</div>
				<div className="light glow rounded-circle bg-danger p-5 m-1">
					red
				</div>
				<div className="light rounded-circle bg-warning p-5 m-1">
					yellow
				</div>
				<div className="light rounded-circle bg-success p-5 m-1">
					green
				</div>
				<button
					className="bg-light d-flex justify-content-center d-flex align-items-center mt-5"
					onClick={() => setColor()}>
					Click me
				</button>
			</div>
		</div>
	);
};

export default TrafficLights;
