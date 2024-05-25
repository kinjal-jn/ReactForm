import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import FormComponent from "./Components/form-component";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<FormComponent />, rootElement);

reportWebVitals();
