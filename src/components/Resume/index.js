import React from "react";
import ResumePDF from "../../assets/documents/Resume 2019.pdf";

// import styled components
import {
	Anchor,
	ResumeSection,
	ResumeHeader,
	// ColorBar,
	HeaderText,
	ResumeText,
	TechContainer,
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
	SiJavascript,
	SiTypescript,
} from "react-icons/si";

const Resume = () => {
	return (
		<>
			<Anchor id={"resume"}></Anchor>
			<ResumeSection>
				<ResumeHeader>
					{/* <ColorBar></ColorBar> */}
					<HeaderText>Résumé</HeaderText>
				</ResumeHeader>
				<TechContainer>
					<ResumeText>
						These are some of the technologies I've been working with recently:
					</ResumeText>
					<Icons>
						<SiJavascript alt="JavaScript"></SiJavascript>
						<SiTypescript alt="TypeScript"></SiTypescript>
						<FaHtml5 alt="HTML5"></FaHtml5>
						<FaCss3 alt="CSS3"></FaCss3>
						<FaReact alt="React"></FaReact>
						<SiTailwindcss alt="Tailwind CSS"></SiTailwindcss>
						<SiStyledComponents alt="styled-components"></SiStyledComponents>
						<SiJquery alt="jQuery"></SiJquery>
						<FaNodeJs alt="Node.js"></FaNodeJs>
						<SiMongodb alt="MongoDB"></SiMongodb>
						<SiMysql alt="MySQL"></SiMysql>
						<SiGraphql alt="GraphQL"></SiGraphql>
						<SiJest alt="Jest"></SiJest>
						<SiFirebase alt="Firebase"></SiFirebase>
					</Icons>
					<ResumeButton>
						<ResumeLink href={ResumePDF} target="_blank">
							Download My Full Résumé
						</ResumeLink>
					</ResumeButton>
				</TechContainer>
			</ResumeSection>
		</>
	);
};

export default Resume;
