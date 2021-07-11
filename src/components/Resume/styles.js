import styled from "styled-components";

export const ResumeSection = styled.section`
	/* box model */
	display: flex;
	flex-direction: column;
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.prussianBlue.light};
`;

export const ResumeHeader = styled.div`
	/* box model */
	display: flex;
	flex-direction: row;
	text-align: center;
	margin: 25px 0;
`;

export const ColorBar = styled.div`
	/* box model */
	width: 0.45rem;
	margin-right: 10px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.prussianBlue.DEFAULT};
`;

export const HeaderText = styled.h2`
	/* box model */
	margin: 5px 0;

	/* typography */
	color: ${({ theme }) => theme.prussianBlue.dark};
	font-size: 2.25rem;
	font-weight: 400;
	line-height: 2.5rem;
`;

export const ResumeText = styled.h3`
	/* typography */
	font-size: 1.125rem;
	line-height: 1.75rem;
	font-weight: 400;
`;

export const TechHeader = styled.h4`
	/* box model */
	border-bottom: 5px solid ${({ theme }) => theme.prussianBlue.dark};
	padding: 10px;
	margin: 0 auto;

	/* typography */
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 2rem;
`;

export const Icons = styled.div`
	/* box model */
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;

	/* typography */
	color: ${({ theme }) => theme.prussianBlue.dark};

	/* visual decorations */

	svg {
		/* box model */
		margin: 10px 10px;

		/* typography */
		font-size: 40px;
	}
`;

export const ResumeButton = styled.button`
	/* box model */
	border: none;
	border-radius: 5px;
	padding: 8px 8px;
	margin: 0 auto;
	margin-top: 20px;

	/* typography */
	color: white;
	font-size: 1.125rem;
	line-height: 1.75rem;

	/* visual decorations */
	background-color: ${({ theme }) => theme.prussianBlue.dark};
`;