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
	width: 10px;
	margin-right: 10px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.prussianBlue.DEFAULT};
`;

export const HeaderText = styled.h2`
	/* box model */
	margin: 5px 0;

	/* typography */
	color: ${({ theme }) => theme.prussianBlue.dark};
	font-size: 2.5rem;
	line-height: 2.5rem;
	/* text-transform: uppercase; */
`;

export const ResumeText = styled.h3`
	/* box model */

	/* typography */
	font-weight: normal;

	/* visual decorations */
`;

export const TechHeader = styled.h4`
	/* box model */
	border-bottom: 5px solid ${({ theme }) => theme.prussianBlue.dark};
	padding: 10px;
	margin: 0;

	/* typography */
	font-size: 1.6rem;

	/* visual decorations */
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

export const ToolsList = styled.ul`
	/* box model */

	/* typography */
	font-size: 1.2rem;

	/* visual decorations */
	list-style-type: armenian;
`;

export const Tool = styled.li`
	/* box model */

	/* typography */

	/* visual decorations */
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
	font-size: 1.2rem;

	/* visual decorations */
	background-color: ${({ theme }) => theme.prussianBlue.dark};
`;
