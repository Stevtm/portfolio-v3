import React from "react";
import ResumePDF from "../../assets/documents/Resume_08Aug2021.pdf";

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
						<SiJavascript alt="JavaScript" title="JavaScript"></SiJavascript>
						<SiTypescript alt="TypeScript" title="TypeScript"></SiTypescript>
						<FaHtml5 alt="HTML5" title="HTML5"></FaHtml5>
						<FaCss3 alt="CSS3" title="CSS3"></FaCss3>
						<FaReact alt="React" title="React"></FaReact>
						<SiTailwindcss
							alt="Tailwind CSS"
							title="Tailwind CSS"
						></SiTailwindcss>
						<SiStyledComponents
							alt="styled-components"
							title="styled-components"
						></SiStyledComponents>
						<SiJquery alt="jQuery" title="jQuery"></SiJquery>
						<FaNodeJs alt="Node.js" title="Node.js"></FaNodeJs>
						<SiMongodb alt="MongoDB" title="MongoDB"></SiMongodb>
						<SiMysql alt="MySQL" title="MySQL"></SiMysql>
						<SiGraphql alt="GraphQL" title="GraphQL"></SiGraphql>
						<SiJest alt="Jest" title="Jest"></SiJest>
						<SiFirebase alt="Firebase" title="Firebase"></SiFirebase>
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
