import React from "react";

import Project from "./Project";
import { portfolioInfo } from "../../utils/portfolio-info";

// import styled components
import {
	PortfolioHeader,
	PortfolioSection,
	ColorBar,
	HeaderText,
} from "./styles";

const Portfolio = () => {
	return (
		<PortfolioSection id={"portfolio"}>
			<PortfolioHeader>
				<ColorBar></ColorBar>
				<HeaderText>Portfolio</HeaderText>
			</PortfolioHeader>
			{portfolioInfo.map((info) => {
				return <Project info={info} key={info.id}></Project>;
			})}
		</PortfolioSection>
	);
};

export default Portfolio;
