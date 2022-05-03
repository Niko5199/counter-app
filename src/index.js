import React from "react";
import { createRoot } from "react-dom/client";
import PrimeraApp from "./PrimeraApp";
import "./index.css";
import CounterApp from "./CounterApp";

// import ReactDOM from 'react-dom';

// * Elemento de Html
// const saludo = <h1>Hola Mundo</h1>;
// const divRoot = document.querySelector('#root');

// ReactDOM.render(saludo, divRoot);

// * Seleccionamos cajita
const divRoot = document.querySelector("#root");

// * Escribimos saludo
const root = createRoot(divRoot);
// root.render(<PrimeraApp  />);
root.render(<CounterApp value={51} />);
