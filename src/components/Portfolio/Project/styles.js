import styled from "styled-components";
import TLNT from "../../../assets/images/TLNT-min.png";

export const ProjectContainer = styled.div`
	/* box model */
	display: flex;
	flex-direction: column;
	padding: 5px 0;
	margin: 20px 0;
	width: 100%;

	/* visual decorations */
	/* background-color : white; */
`;

export const ProjectHeader = styled.div`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	margin: 0;

	/* visual decorations */
`;

export const ProjectTitle = styled.h1`
	/* box model */
	margin: 0;

	/* typography */
	font-size: 1.6rem;
`;

export const Icons = styled.div``;

export const ColorBar = styled.div`
	/* box model */
	height: 5px;
	width: 100%;
	margin-right: 10px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelBlue.dark};
`;

export const ProjectContent = styled.div`
	/* box model */
	padding: 10px;
	border-radius: 0 0 10px 10px;

	/* visual decorations */
	background-color: white;
`;

export const ProjectDesc = styled.p`
	/* box model */
	margin: 0;

	/* typography */
	font-size: 1.2rem;

	/* visual decorations */
`;

export const ProjectTools = styled.p`
	/* box model */
	margin: 20px 0 0 0;
	/* visual decorations */
`;

export const Link = styled.a``;

export const Icon = styled.img`
	/* box model */
	margin: 0 5px;
	width: 28px;
`;
