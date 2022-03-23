import React from "react";
import { BsGithub } from "react-icons/bs";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<h1>Pathfinding Visualizer</h1>
			<h3>Dijkstra's Algorithm</h3>
			<p className="debrief">
				Welcome to the Pathfinding Visualizer! This is a project demonstarting
				the Dijkstra's Algorithm in real-time. The algorithm is used for finding
				the shortest paths between nodes in a graph, which may represent, for
				example, road networks in real life applications.
				<br /> <br />
				To get started, you can click, or click and drag tiles in the graph to
				draw "walls" or obstacles that the car has to avoid in order to reach
				it's finishing point, the house. After the walls have been drawn you can
				click "Visualize Dijkstra's Algorithm" to see it in action. To read
				more, click the GitHub icon to navigate to my repository.
			</p>
			<p className="githubLink">
				<a href="www.google.com">
					<BsGithub size={45} />
				</a>
			</p>
			<p className="keyTitle">Key:</p>
			<div className="colorKey">
				<p className="keyItem1"></p>
				<span className="itemDescription"> = Starting Node</span>
				<p className="keyItem2"></p>
				<span className="itemDescription"> = Finish Node</span>
				<p className="keyItem3"></p>
				<span className="itemDescription"> = Wall</span>
				<p className="keyItem4"></p>
				<span className="itemDescription"> = Shortest Path</span>
				<p className="keyItem5"></p>
				<span className="itemDescription"> = Visited Node</span>
				<p className="keyItem6"></p>
				<span className="itemDescription"> = Unvisited Node</span>
			</div>
		</div>
	);
}

export default Header;
