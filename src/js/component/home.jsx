import React, { useState } from "react";

function Home () {
	const [selectedColor, setSelectedColor] = useState("yellow");
	return (
		<div className="traffic-light">
			<div className="baston"></div>
			<div className="container">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"light red" + (selectedColor === "red" ? "glow" : "")
					}></div>

				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light yellow" +
						(selectedColor === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light green" +
						(selectedColor === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
