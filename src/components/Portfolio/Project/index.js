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

import TLNTScreenshot from "../../../assets/images/TLNT-min.png";

const Project = ({ info }) => {
	const { title, desc, tools, github, link } = info;

	return (
		<ProjectContainer>
			<Tinted>
				<ProjectImg src={TLNTScreenshot}></ProjectImg>
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
