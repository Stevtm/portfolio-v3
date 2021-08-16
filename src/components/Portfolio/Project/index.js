import React from "react";

import Tool from "./Tool";

// import icons
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

// import styled components
import {
	ProjectContainer,
	Tinted,
	ProjectImg,
	ProjectDetails,
	ProjectHeader,
	ProjectTitle,
	Icons,
	ColorBar,
	ProjectContent,
	ProjectDesc,
	ProjectTools,
	Link,
} from "./styles";

import AGOScreenshot from "../../../assets/images/AGO-min.png";
import TLNTScreenshot from "../../../assets/images/TLNT-min.png";
import BudgetTrackerScreenshot from "../../../assets/images/BudgetTracker-min.png";
import NoteTakerScreenshot from "../../../assets/images/NoteTaker-min.png";
import RTQuizScreenshot from "../../../assets/images/RTQuiz-min.png";
import TechBlogScreenshot from "../../../assets/images/TechBlog-min.png";

const Project = ({ info }) => {
	const { title, desc, tools, github, link } = info;

	// get the correct image to display
	let projectScreenshot;

	switch (info.photo) {
		case "AGO":
			projectScreenshot = AGOScreenshot;
			break;
		case "TLNT":
			projectScreenshot = TLNTScreenshot;
			break;
		case "Budget":
			projectScreenshot = BudgetTrackerScreenshot;
			break;
		case "Tech":
			projectScreenshot = TechBlogScreenshot;
			break;
		case "RTQuiz":
			projectScreenshot = RTQuizScreenshot;
			break;
		case "Note":
			projectScreenshot = NoteTakerScreenshot;
			break;
		default:
			projectScreenshot = TLNTScreenshot;
	}

	return (
		<ProjectContainer>
			<Tinted>
				<ProjectImg
					src={projectScreenshot}
					alt={`Screenshot of the project ${info.title}`}
				></ProjectImg>
			</Tinted>
			<ProjectDetails>
				<ColorBar></ColorBar>
				<ProjectHeader>
					<ProjectTitle>{title}</ProjectTitle>
					<Icons>
						<Link href={github} target="_blank">
							<FaGithub></FaGithub>
						</Link>
						{link && (
							<Link href={link} target="_blank">
								<BiLinkExternal></BiLinkExternal>
							</Link>
						)}
					</Icons>
				</ProjectHeader>
				<ProjectContent>
					<ProjectDesc>{desc}</ProjectDesc>
					<ProjectTools>
						{tools.map((tool) => {
							return <Tool info={tool} key={tool.id}></Tool>;
						})}
					</ProjectTools>
				</ProjectContent>
			</ProjectDetails>
		</ProjectContainer>
	);
};

export default Project;
