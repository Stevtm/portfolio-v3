import styled from "styled-components";

export const TitleSection = styled.section`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 90vh;
	justify-content: center;
	margin: 0 20px;
`;

export const TitleContainer = styled.div`
	/* box model */
	display: flex;
	flex-direction: row;
`;

export const ColorBar = styled.div`
	/* box model */
	width: 10px;
	margin-right: 10px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.secondary};
`;

export const Name = styled.h1`
	/* box model */
	margin: 0;

	/* typography */
	color: ${({ theme }) => theme.secondary};
	font-size: 3.3rem;
	line-height: 1;
`;

export const Motto = styled.h2`
	/* box model */
	padding-top: 20px;
	margin: 0;
`;
