import React from "react";
import ResumePDF from "../../assets/documents/Resume_08Aug2021.pdf";

// import styled components
import {
	Anchor,
	ResumeSection,
	ResumeHeader,
	HeaderText,
	ResumeText,
	TechContainer,
	Tech,
	Icons,
	TechName,
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
						<Tech>
							<SiJavascript alt="JavaScript" title="JavaScript"></SiJavascript>
							<TechName>JavaScript</TechName>
						</Tech>
						<Tech>
							<SiTypescript alt="TypeScript" title="TypeScript"></SiTypescript>
							<TechName>TypeScript</TechName>
						</Tech>
						<Tech>
							<FaHtml5 alt="HTML5" title="HTML5"></FaHtml5>
							<TechName>HTML5</TechName>
						</Tech>
						<Tech>
							<FaCss3 alt="CSS3" title="CSS3"></FaCss3>
							<TechName>CSS3</TechName>
						</Tech>
						<Tech>
							<FaReact alt="React" title="React"></FaReact>
							<TechName>React</TechName>
						</Tech>
						<Tech>
							<SiTailwindcss
								alt="Tailwind CSS"
								title="Tailwind CSS"
							></SiTailwindcss>
							<TechName>Tailwind CSS</TechName>
						</Tech>
						<Tech>
							<SiStyledComponents
								alt="styled-components"
								title="styled-components"
							></SiStyledComponents>
							<TechName>styled-components</TechName>
						</Tech>
						<Tech>
							<SiJquery alt="jQuery" title="jQuery"></SiJquery>
							<TechName>jQuery</TechName>
						</Tech>
						<Tech>
							<FaNodeJs alt="Node.js" title="Node.js"></FaNodeJs>
							<TechName>Node.js</TechName>
						</Tech>
						<Tech>
							<SiMongodb alt="MongoDB" title="MongoDB"></SiMongodb>
							<TechName>MongoDB</TechName>
						</Tech>
						<Tech>
							<SiMysql alt="MySQL" title="MySQL"></SiMysql>
							<TechName>MySQL</TechName>
						</Tech>
						<Tech>
							<SiGraphql alt="GraphQL" title="GraphQL"></SiGraphql>
							<TechName>GraphQL</TechName>
						</Tech>
						<Tech>
							<SiJest alt="Jest" title="Jest"></SiJest>
							<TechName>Jest</TechName>
						</Tech>
						<Tech>
							<SiFirebase alt="Firebase" title="Firebase"></SiFirebase>
							<TechName>Firebase</TechName>
						</Tech>
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
