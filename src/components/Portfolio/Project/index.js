import React from "react";

import Tool from "./Tool";

// import icons
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

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
} from "./styles";

const Project = ({ info }) => {
	const { title, desc, tools, github, link } = info;

	return (
		<ProjectContainer>
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
			<ColorBar></ColorBar>
			<ProjectContent>
				<ProjectDesc>{desc}</ProjectDesc>
				<ProjectTools>
					{tools.map((tool) => {
						return <Tool info={tool} key={tool.id}></Tool>;
					})}
				</ProjectTools>
			</ProjectContent>
		</ProjectContainer>
	);
};

export default Project;
