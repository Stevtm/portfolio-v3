import React from "react";
import ResumePDF from "../../assets/documents/Resume 2019.pdf";

// import styled components
import {
	Anchor,
	ResumeSection,
	ResumeHeader,
	ColorBar,
	HeaderText,
	ResumeText,
	TechContainer,
	TechStack,
	TechHeader,
	Icons,
	ResumeButton,
	ResumeLink,
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
		<>
			<Anchor id={"resume"}></Anchor>
			<ResumeSection>
				<ResumeHeader>
					<ColorBar></ColorBar>
					<HeaderText>Résumé</HeaderText>
				</ResumeHeader>
				<ResumeText>
					These are some of the technologies I've been working with recently:
				</ResumeText>
				<TechContainer>
					<TechStack>
						<TechHeader>Front-End</TechHeader>
						<Icons>
							<FaReact></FaReact>
							<FaCss3></FaCss3>
							<FaHtml5></FaHtml5>
							<SiTailwindcss></SiTailwindcss>
							<SiJquery></SiJquery>
						</Icons>
					</TechStack>
					<TechStack>
						<TechHeader>Back-End</TechHeader>
						<Icons>
							<FaNodeJs></FaNodeJs>
							<SiMongodb></SiMongodb>
							<SiMysql></SiMysql>
							<SiGraphql></SiGraphql>
							<SiJest></SiJest>
						</Icons>
					</TechStack>
				</TechContainer>
				<ResumeButton>
					<ResumeLink href={ResumePDF} target="_blank">
						Download My Full Résumé
					</ResumeLink>
				</ResumeButton>
			</ResumeSection>
		</>
	);
};

export default Resume;
