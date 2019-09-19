import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //Component (as it starts with a capital letter )
import { createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers";

//Wired up with Provider
// Any components can access to the stores through provider tag
ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
