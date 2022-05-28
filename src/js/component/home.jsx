import React from "react";
import TrafficLights from "./TrafficLights";
// import Counter from "./Counter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="home align-items-center">
			<TrafficLights />
		</div>
	);
};

export default Home;
