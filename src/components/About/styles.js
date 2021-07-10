import styled from "styled-components";

export const AboutSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.tertiary};
`;

export const AboutHeader = styled.h2`
	/* box model */
	text-align: center;

	/* typography */
	font-size: 2.25rem;
	line-height: 2.5rem;
`;

export const AboutContent = styled.div`
	/* box model */
	display: flex;
	flex-direction: column;
`;
