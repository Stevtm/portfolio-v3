import React from "react";

import Project from "./Project";
import { portfolioInfo } from "../../utils/portfolio-info";

// import styled components
import {
	Anchor,
	PortfolioHeader,
	PortfolioSection,
	HeaderText,
	PortfolioContent,
} from "./styles";

const Portfolio = () => {
	return (
		<>
			<Anchor id={"portfolio"}></Anchor>
			<PortfolioSection>
				<PortfolioHeader>
					<HeaderText>Portfolio</HeaderText>
				</PortfolioHeader>
				<PortfolioContent>
					{portfolioInfo.map((info) => {
						return <Project info={info} key={info.id}></Project>;
					})}
				</PortfolioContent>
			</PortfolioSection>
		</>
	);
};

export default Portfolio;
