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
	SiFirebase,
	SiStyledComponents,
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
							<FaReact alt="React"></FaReact>
							<FaCss3 alt="CSS3"></FaCss3>
							<FaHtml5 alt="HTML5"></FaHtml5>
							<SiTailwindcss alt="Tailwind CSS"></SiTailwindcss>
							<SiStyledComponents alt="styled-components"></SiStyledComponents>
							<SiJquery alt="jQuery"></SiJquery>
						</Icons>
					</TechStack>
					<TechStack>
						<TechHeader>Back-End</TechHeader>
						<Icons>
							<FaNodeJs alt="Node.js"></FaNodeJs>
							<SiMongodb alt="MongoDB"></SiMongodb>
							<SiMysql alt="MySQL"></SiMysql>
							<SiGraphql alt="GraphQL"></SiGraphql>
							<SiJest alt="Jest"></SiJest>
							<SiFirebase alt="Firebase"></SiFirebase>
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
