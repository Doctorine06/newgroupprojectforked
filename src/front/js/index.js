//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import clock from "./component/clock.jsx";
//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application

let seconds = 0;

setInterval(() => {
  seconds++;
  ReactDOM.render(<Home sec={seconds} />, document.querySelector("#clock"));
});
ReactDOM.render(<Layout />, document.querySelector("#app"));
