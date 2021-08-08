import React from "react";
import Typewriter from "typewriter-effect";

const Clock = () => {
	const time = "10:00 p.m.";

	return (
		<div>
			<p>
				It's <strong>{time}</strong> in Toronto
			</p>
			<Typewriter
				options={{
					strings: [
						"I'm probably coding",
						"I might be hanging out with friends",
						"I could be watching a movie",
					],
					deleteSpeed: 1,
					autoStart: true,
					loop: true,
				}}
			/>
		</div>
	);
};

export default Clock;
