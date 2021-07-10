import React from "react";

import GitHubIcon from "../../../assets/images/GitHub.png";
import LinkIcon from "../../../assets/images/Link.png";

// import styled components
import {
	ProjectContainer,
	ProjectHeader,
	ProjectDesc,
	ProjectTools,
	Link,
	Icon,
} from "./styles";

const Project = ({ info }) => {
	const { title, desc, tools, github, link } = info;

	return (
		<ProjectContainer>
			<ProjectHeader>{title}</ProjectHeader>
			<ProjectDesc>{desc}</ProjectDesc>
			<ProjectTools>{tools}</ProjectTools>
			<Link href={github} target="_blank">
				<Icon src={GitHubIcon}></Icon>
			</Link>
			{link && (
				<Link href={link} target="_blank">
					<Icon src={LinkIcon}></Icon>
				</Link>
			)}
		</ProjectContainer>
	);
};

export default Project;
