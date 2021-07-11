import styled from "styled-components";

export const TitleSection = styled.section`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 50px);
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
	background-color: ${({ theme }) => theme.pastelGreen.dark};
`;

export const Name = styled.h1`
	/* box model */
	margin: 0;

	/* typography */
	color: ${({ theme }) => theme.secondary};
	font-size: 4rem;
	line-height: 1;
`;

export const Motto = styled.h2`
	/* box model */
	padding-top: 20px;
	margin: 0;

	/* typography */
	color: ${({ theme }) => theme.darkGray};
	font-size: 2rem;
`;
