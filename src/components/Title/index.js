import React from "react";
import styled from "styled-components";

const TitleSection = styled.section`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 90vh;
	justify-content: center;
	margin: 0 20px;
`;

const TitleContainer = styled.div`
	/* box model */
	display: flex;
	flex-direction: row;
`;

const ColorBar = styled.div`
	/* box model */
	width: 20px;
	margin-right: 10px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.secondary};
`;

const Name = styled.h1`
	/* box model */
	margin: 0;

	/* typography */
	color: ${({ theme }) => theme.secondary};
	font-size: 3.3rem;
	line-height: 1;
`;

const Motto = styled.h2`
	/* box model */
	padding-top: 20px;
	margin: 0;
`;

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
						Full Stack Developer. Mechanical Engineering Graduate. Lifelong
						Learner.
					</Motto>
				</div>
			</TitleContainer>
		</TitleSection>
	);
};

export default Title;
