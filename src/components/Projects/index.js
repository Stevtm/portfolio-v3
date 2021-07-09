import React from "react";
import styled from "styled-components";

const ProjectSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.quaternary};
`;

const ProjectHeader = styled.h2`
	/* box model */
	text-align: center;

	/* typography */
	font-size: 2.25rem;
	line-height: 2.5rem;
`;

const Projects = () => {
	return (
		<ProjectSection>
			<ProjectHeader>Projects</ProjectHeader>
		</ProjectSection>
	);
};

export default Projects;
