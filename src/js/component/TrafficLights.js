import React, { useState } from "react";

const TrafficLights = (props) => {
	const [Color, setColor] = useState("red");

	return (
		<div className="container d-flex justify-content-center pt-5 ">
			<div className="bg-dark rounded-3 p-3">
				<div></div>
				<div
					onClick={() => setColor("red")}
					className={
						"light rounded-circle bg-danger p-5 m-1 " +
						(Color === "red" ? "glow" : "")
					}>
					red
				</div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light rounded-circle bg-warning p-5 m-1 " +
						(Color === "yellow" ? "glow" : "")
					}>
					yellow
				</div>
				<div
					onClick={() => setColor("green")}
					className={
						"light rounded-circle bg-success p-5 m-1 " +
						(Color === "green" ? "glow" : "")
					}>
					green
				</div>
				{/* <button
					className="bg-light d-flex justify-content-center d-flex align-items-center mt-5"
					onClick={() => setColor()}>
					Click me
				</button> */}
			</div>
		</div>
	);
};

export default TrafficLights;
