import styled from "styled-components";

export const PortfolioSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelGreen.light};
`;

export const ColorBar = styled.div`
	/* box model */
	width: 10px;
	margin-right: 10px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelGreen.dark};
`;

export const PortfolioHeader = styled.div`
	/* box model */
	display: flex;
	flex-direction: row;
	text-align: center;
	margin: 25px 0;
`;

export const HeaderText = styled.h2`
	/* box model */
	margin: 5px 0;

	/* typography */
	color: ${({ theme }) => theme.secondary};
	font-size: 2.5rem;
	line-height: 2.5rem;
	/* text-transform: uppercase; */
`;
