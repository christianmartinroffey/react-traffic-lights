//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLights from "./component/TrafficLights.js";
import Home from "./component/home.jsx";
//render your react application

ReactDOM.render(<Home />, document.querySelector("#app"));
