//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
const SecondsCounter = (props) => {
	return (
		<div className= "Contador">
	
		<div className="reloj"><i className="fa-solid fa-clock"></i></div>
		<div className="seis">{props.digitoSeis}</div>
        <div className="cinco">{props.digitoCinco}</div>
        <div className="cuatro">{props.digitoCuatro}</div>
		<div className="tres">{props.digitoTres}</div>
		<div className="dos">{props.digitoDos}</div>
		<div className="uno">{props.digitoUno}</div>
		</div>
	);
};
SecondsCounter.PropTypes ={
	digitoSeis: PropTypes.number,
	digitoCinco: PropTypes.number,
	digitoCuatro: PropTypes.number,
	digitoTres: PropTypes.number,
	digitoDos: PropTypes.number,
	digitoUno: PropTypes.number
	
	
	

}
let counter = 0;
setInterval(function(){
	const seis = Math.floor(counter/100000);
	const cinco = Math.floor(counter/10000);
	const cuatro = Math.floor(counter/1000);
	const tres = Math.floor(counter/100);
	const dos = Math.floor(counter/10);
	const uno = Math.floor(counter/1);
console.log(seis, cinco, cuatro, tres, dos, uno);
    counter++;
},1000);

//render your react application
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));
