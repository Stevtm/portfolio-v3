import React from "react";
import styled from "styled-components";

import GitHubIcon from "../../../assets/images/GitHub.png";
import LinkIcon from "../../../assets/images/Link.png";

const ProjectContainer = styled.div`
	/* box model */
	padding: 5px 10px;
	margin: 20px 0;
	width: 100%;

	/* visual decorations */
	background-color: gray;
`;

const ProjectHeader = styled.h1`
	/* box model */

	/* visual decorations */
`;

const ProjectDesc = styled.p`
	/* box model */

	/* visual decorations */
`;

const ProjectTools = styled.p`
	/* box model */

	/* visual decorations */
`;

const Link = styled.a``;

const Icon = styled.img`
	/* box model */
	width: 35px;
`;

const Project = ({ info }) => {
	const { title, desc, tools, github, link } = info;

	console.log(info);

	return (
		<ProjectContainer>
			<ProjectHeader>{title}</ProjectHeader>
			<ProjectDesc>{desc}</ProjectDesc>
			<ProjectTools>{tools}</ProjectTools>
			<Link href={github}>
				<Icon src={GitHubIcon}></Icon>
			</Link>
			{link && (
				<Link href={link}>
					<Icon src={LinkIcon}></Icon>
				</Link>
			)}
		</ProjectContainer>
	);
};

export default Project;
