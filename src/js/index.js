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
    <div className="Contador">
      <div className="reloj">
        <i className="fa-solid fa-clock"> </i>{" "}
      </div>{" "}
      <div className="seis"> {props.digitoSeis} </div>{" "}
      <div className="cinco"> {props.digitoCinco} </div>{" "}
      <div className="cuatro"> {props.digitoCuatro} </div>{" "}
      <div className="tres"> {props.digitoTres} </div>{" "}
      <div className="dos"> {props.digitoDos} </div>{" "}
      <div className="uno"> {props.digitoUno} </div>{" "}
    </div>
  );
};
SecondsCounter.PropTypes = {
  digitoSeis: PropTypes.number,
  digitoCinco: PropTypes.number,
  digitoCuatro: PropTypes.number,
  digitoTres: PropTypes.number,
  digitoDos: PropTypes.number,
  digitoUno: PropTypes.number,
};
let counter = 0;
const tiempo = {
  seg: 0,
  dseg: 0,
  min: 0,
  dmin: 0,
  hra: 0,
  dhra: 0,
};

setInterval(function () {
  if (counter !== 0) {
    tiempo.dhra = 0;
    tiempo.hra = 0;
    tiempo.dmin = 0;

    if (counter % 60 === 0 && counter != 0) {
      tiempo.min += 1;
      if (tiempo.min % 10 === 0) {
        tiempo.min = 0;
      }
    }
   
    
    if (counter% 10 === 0) {
		tiempo.dseg += 1;
		if(tiempo.dseg===10) tiempo.dseg=0

    }

      tiempo.seg += 1;
    if(tiempo.seg===10) tiempo.seg=0
}
console.log(
  tiempo.dhra,
  tiempo.hra,
  tiempo.dmin,
  tiempo.min,
  tiempo.dseg,
  tiempo.seg
);
counter++;
}, 1000);

//render your react application
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));
