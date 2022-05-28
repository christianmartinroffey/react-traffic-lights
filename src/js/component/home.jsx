import React from "react";
import SimpleCounter from "./Counter";
// import Counter from "./Counter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="home align-items-center">
			<SimpleCounter />
		</div>
	);
};

export default Home;
