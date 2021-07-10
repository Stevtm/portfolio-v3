import React from "react";
import RecentPic from "../../assets/images/recent-pic.jpeg";

// import styled components
import { AboutSection, AboutHeader, AboutContent } from "./styles";

const About = () => {
	return (
		<AboutSection id={"about"}>
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
					<li>styled-components</li>
				</ul>
				<img src={RecentPic} alt="Steven Maddison headshot"></img>
			</AboutContent>
		</AboutSection>
	);
};

export default About;
