import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { DateTime } from "luxon";

// import styled components
import { ClockDiv, TimeDiv, TimeDescription, Time } from "./style";

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
			<TimeDiv>
				<TimeDescription>It's</TimeDescription>
				<Time>{time} </Time>
				<TimeDescription>in Toronto</TimeDescription>
			</TimeDiv>
			<TimeDescription>I'm probably...</TimeDescription>
			<Typewriter
				options={{
					strings: [
						"working on a coding project",
						"hanging out with friends",
						"watching a movie",
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
