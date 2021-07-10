import React from "react";
import styled from "styled-components";

import Project from "./Project";
import { portfolioInfo } from "../../utils/portfolio-info";

const PortfolioSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.quaternary};
`;

const PortfolioHeader = styled.h2`
	/* box model */
	text-align: center;

	/* typography */
	font-size: 2.25rem;
	line-height: 2.5rem;
`;

const Portfolio = () => {
	return (
		<PortfolioSection>
			<PortfolioHeader>Portfolio</PortfolioHeader>
			{portfolioInfo.map((info) => {
				return <Project info={info} key={info.id}></Project>;
			})}
		</PortfolioSection>
	);
};

export default Portfolio;
