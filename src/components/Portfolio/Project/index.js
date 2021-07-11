import React from "react";

import GitHubIcon from "../../../assets/images/GitHub.png";
import LinkIcon from "../../../assets/images/Link.png";

import Tool from "./Tool";

// import styled components
import {
	ProjectContainer,
	ProjectHeader,
	ProjectTitle,
	Icons,
	ColorBar,
	ProjectContent,
	ProjectDesc,
	ProjectTools,
	Link,
	Icon,
} from "./styles";

const Project = ({ info }) => {
	const { title, desc, tools, github, link } = info;

	return (
		<ProjectContainer>
			<ProjectHeader>
				<ProjectTitle>{title}</ProjectTitle>
				<Icons>
					<Link href={github} target="_blank">
						<Icon src={GitHubIcon}></Icon>
					</Link>
					{link && (
						<Link href={link} target="_blank">
							<Icon src={LinkIcon}></Icon>
						</Link>
					)}
				</Icons>
			</ProjectHeader>
			<ColorBar></ColorBar>
			<ProjectContent>
				<ProjectDesc>{desc}</ProjectDesc>
				{tools.map((tool) => {
					return <Tool info={tool} key={tool.id}></Tool>;
				})}
			</ProjectContent>
		</ProjectContainer>
	);
};

export default Project;
