import React from "react";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import Header from "./Header";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<PathfindingVisualizer className="grid" />
		</div>
	);
}

export default App;
