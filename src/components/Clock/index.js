import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { DateTime } from "luxon";

// import styled components
import { ClockDiv, Time } from "./style";

const Clock = () => {
	const [time, setTime] = useState(
		DateTime.now()
			.setZone("Asia/Tokyo")
			.toLocaleString(DateTime.TIME_24_WITH_SECONDS)
	);

	setTimeout(() => {
		setTime(
			DateTime.now()
				.setZone("Asia/Tokyo")
				.toLocaleString(DateTime.TIME_24_WITH_SECONDS)
		);
	}, 1000);

	return (
		<ClockDiv>
			<p>
				It's <Time>{time} </Time>in Toronto
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
		</ClockDiv>
	);
};

export default Clock;
