import React from "react";
import RecentPic from "../../assets/images/recent-pic.jpeg";

// import styled components
import {
	Anchor,
	AboutSection,
	ColorBar,
	AboutHeader,
	HeaderText,
	AboutContent,
	AboutText,
	ProfilePic,
} from "./styles";

const About = () => {
	return (
		<>
			<Anchor id={"about"}></Anchor>
			<AboutSection>
				<AboutHeader>
					<ColorBar></ColorBar>
					<HeaderText>About Me</HeaderText>
				</AboutHeader>
				<AboutContent>
					<AboutText>Hi! I'm Steven.</AboutText>
					<AboutText>
						I'm a full stack web developer who is passionate about solving
						problems and building visually appealing, responsive, and functional
						web applications. I love programming because it lets me solve
						problems.
					</AboutText>
					<AboutText>
						Whether it's creating a web app to log my workout data or using code
						to perform biomechanical analysis, I look forward to taking a
						challenge and solving it.
					</AboutText>

					<ProfilePic
						src={RecentPic}
						alt="Steven Maddison headshot"
					></ProfilePic>
				</AboutContent>
			</AboutSection>
		</>
	);
};

export default About;
