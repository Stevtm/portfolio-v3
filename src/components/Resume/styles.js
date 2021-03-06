import styled from "styled-components";

export const Anchor = styled.span`
	/* box model */
	display: block;
	height: calc(40px);
	margin-top: -40px;
	visibility: hidden;
`;

export const ResumeSection = styled.section`
	/* box model */
	display: flex;
	flex-direction: column;
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.prussianBlue.lighter};
`;

export const ResumeHeader = styled.div`
	/* box model */
	display: flex;
	flex-direction: row;
	text-align: center;
	margin: 10px 0;
`;

// export const ColorBar = styled.div`
// 	/* box model */
// 	width: 0.45rem;
// 	margin-right: 10px;

// 	/* visual decorations */
// 	background-color: ${({ theme }) => theme.prussianBlue.DEFAULT};
// `;

export const HeaderText = styled.h2`
	/* box model */
	margin: 5px 0;

	/* typography */
	color: ${({ theme }) => theme.prussianBlue.dark};
	font-family: "Staatliches";
	font-size: 3rem;
	font-weight: 500;
	line-height: 1;
`;

export const ResumeText = styled.h3`
	/* typography */
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 1.75rem;
	padding: 0px 5px;
	margin: 10px 0;
`;

export const TechContainer = styled.div`
	/* box model */
	align-items: center;
	border-top: 10px solid ${({ theme }) => theme.prussianBlue.DEFAULT};
	border-radius: 0px 0px 30px 30px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	padding: 15px;
	margin: 0 auto;

	/* visual decorations */
	background-color: white;
`;

export const Tech = styled.div`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 0px 5px;
	width: 65px;
`;

export const Icons = styled.div`
	/* box model */
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;

	/* typography */
	color: ${({ theme }) => theme.prussianBlue.dark};

	svg {
		/* box model */
		margin: 10px 10px;

		/* typography */
		font-size: 40px;
	}
`;

export const TechName = styled.p`
	/* box model */
	margin: 0;

	/* typography */
	font-size: 0.75rem;
	line-height: 1rem;
	text-align: center;
`;

export const ResumeButton = styled.button`
	/* box model */
	border: none;
	border-radius: 5px;
	padding: 8px 8px;
	margin: 10px auto;
	margin-top: 20px;

	/* typography */
	color: white;
	font-size: 1.125rem;
	line-height: 1.75rem;

	/* visual decorations */
	background-color: ${({ theme }) => theme.prussianBlue.dark};
	cursor: pointer;
	transition: 0.2s all;

	&:hover {
		background-color: ${({ theme }) => theme.prussianBlue.DEFAULT};
	}
`;

export const ResumeLink = styled.a`
	/* typography */
	text-decoration: none;
	color: white;
`;
