//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/casa.jsx";
//include your index.scss file into the bundle
import "../styles/index.css";
import Clock from "./component/clock.jsx";

//import your own components
import Layout from "./layout";

//render your react application

ReactDOM.render(<Layout />, document.querySelector("#app"));
ReactDOM.render(<Clock />, document.querySelector("clock"));
