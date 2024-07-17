import React, { useState } from "react";
import responses from "./responses.json";
import "./ball.css";
import { choice } from "./itmhndl";

function EightBall({ rsp = responses }) {
	const [response, setResponse] = useState({
		msg: "Think of a question",
		color: "black",
	});

	function clickHnd(e) {
		setResponse(choice(rsp));
	}

	return (
		<div
			className="ball"
			onClick={clickHnd}
			style={{ backgroundColor: response.color }}
		>
			<b>{response.msg}</b>
		</div>
	);
}

export default EightBall;
