import React from "react";

// import styled components
import { TitleSection, TitleContainer, ColorBar, Name, Motto } from "./styles";

const Title = () => {
	return (
		<TitleSection>
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
		</TitleSection>
	);
};

export default Title;
