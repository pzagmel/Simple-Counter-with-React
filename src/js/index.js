//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
const SecondsCounter = (props) => {
	return (
		<div className= "Contador">
	
		<div className="reloj"><i className="fa-solid fa-clock"></i></div>
		<div className="seis">0</div>
        <div className="cinco">0</div>
        <div className="cuatro">0</div>
		<div className="tres">0</div>
		<div className="dos">0</div>
		<div className="uno">0</div>
		</div>
	);
};


//render your react application
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));
