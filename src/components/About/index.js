import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.tertiary};
`;

const AboutHeader = styled.h2`
	/* box model */
	text-align: center;

	/* typography */
	font-size: 2.25rem;
	line-height: 2.5rem;
`;

const AboutContent = styled.div`
	/* box model */
	display: flex;
	flex-direction: column;
`;

const About = () => {
	return (
		<AboutSection>
			<AboutHeader>About Me</AboutHeader>
			<AboutContent>
				<p>
					Hi! I'm Steven. I'm a full stack web developer who is passionate about
					solving problems and building visually appealing, responsive, and
					functional web applications. I love programming because it lets me
					solve problems.
				</p>
				<p>
					Whether it's creating a web app to log my workout data or using code
					to perform biomechanical analysis, I look forward to taking a
					challenge and solving it.
				</p>
				<h3>Here are a few of the technologies I've been using recently: </h3>
				<ul>
					<li>React</li>
					<li>MongoDB</li>
					<li>MySQL</li>
					<li>Node.js</li>
					<li>Styled-Components</li>
				</ul>
			</AboutContent>
		</AboutSection>
	);
};

export default About;
