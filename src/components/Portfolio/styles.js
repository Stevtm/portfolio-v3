import styled from "styled-components";

export const Anchor = styled.span`
	/* box model */
	display: block;
	height: calc(40px);
	margin-top: -40px;
	visibility: hidden;
`;

export const PortfolioSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelGreen.lighter};

	@media (min-width: 1281px) {
		& > :nth-child(2) > :nth-child(even) > :nth-child(1) {
			grid-column: 3 / 6;
		}

		& > :nth-child(2) > :nth-child(even) > :nth-child(2) {
			grid-column: 1 / 4;
		}
	}
`;

export const ColorBar = styled.div`
	/* box model */
	width: 0.55rem;
	margin-right: 10px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelGreen.DEFAULT};
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
	color: ${({ theme }) => theme.pastelGreen.dark};
	font-family: "Staatliches";
	font-size: 3rem;
	font-weight: 500;
	line-height: 1;
`;

export const PortfolioContent = styled.div`
	/* box model */
	align-items: center;
	border-top: 10px solid ${({ theme }) => theme.pastelGreen.DEFAULT};
	border-radius: 0px 0px 30px 30px;
	display: flex;
	flex-direction: column;
	padding: 15px;

	/* visual decorations */
	background-color: white;
`;
