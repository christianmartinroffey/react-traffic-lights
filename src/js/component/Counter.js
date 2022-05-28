import React from "react";
import ReactDOM from "react-dom";

function SimpleCounter(props) {
	return (
		<div className="bigCounter position-absolute top-50 start-50 translate-middle">
			<div ClassName="timer container-fluid justify-content-center">
				<div className="calendar">
					<i class="fas fa-stopwatch"></i>
				</div>
				<div className="">{props.digitSix % 10}</div>
				<div className="">{props.digitFive % 10}</div>
				<div className="">{props.digitFour % 10}</div>
				<div className="">{props.digitThree % 10}</div>
				<div className="">{props.digitTwo % 10}</div>
				<div className="">{props.digitOne % 10}</div>
			</div>
		</div>
	);
}

export default SimpleCounter;
