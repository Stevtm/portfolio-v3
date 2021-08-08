import React from "react";

import Clock from "../Clock";

// import styled components
import { TitleSection, TitleContainer, ColorBar, Name, Motto } from "./styles";

const Title = () => {
	return (
		<TitleSection>
			<div></div>
			<TitleContainer>
				<ColorBar></ColorBar>
				<div>
					<Name>
						Steven <br />
						<span>Maddison</span>
					</Name>
					<Motto>
						Full Stack Developer. Engineering Graduate. Lifelong Learner.
					</Motto>
				</div>
			</TitleContainer>
			<Clock></Clock>
		</TitleSection>
	);
};

export default Title;
