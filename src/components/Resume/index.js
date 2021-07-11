import React from "react";

// import styled components
import {
	ResumeSection,
	ResumeHeader,
	ColorBar,
	HeaderText,
	ResumeText,
	TechHeader,
	Icons,
	ResumeButton,
} from "./styles";

// import icons
import { FaReact, FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
	SiTailwindcss,
	SiMongodb,
	SiMysql,
	SiGraphql,
	SiJest,
	SiJquery,
} from "react-icons/si";

const Resume = () => {
	return (
		<ResumeSection>
			<ResumeHeader>
				<ColorBar></ColorBar>
				<HeaderText>Résumé</HeaderText>
			</ResumeHeader>
			<ResumeText>
				These are some of the technologies I've been working with recently:
			</ResumeText>
			<TechHeader>Front-End</TechHeader>
			<Icons>
				<FaReact></FaReact>
				<FaCss3></FaCss3>
				<FaHtml5></FaHtml5>
				<SiTailwindcss></SiTailwindcss>
				<SiJquery></SiJquery>
			</Icons>
			<TechHeader>Back-End</TechHeader>
			<Icons>
				<FaNodeJs></FaNodeJs>
				<SiMongodb></SiMongodb>
				<SiMysql></SiMysql>
				<SiGraphql></SiGraphql>
				<SiJest></SiJest>
			</Icons>
			<ResumeButton>Download My Full Résumé</ResumeButton>
		</ResumeSection>
	);
};

export default Resume;
