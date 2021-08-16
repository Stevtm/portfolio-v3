import styled from "styled-components";
import TLNTScreenshot from "../../../assets/images/TLNT-min.png";

export const ProjectContainer = styled.div`
	/* box model */
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	padding: 5px;
	margin: 20px 0;
	width: 100%;
`;

export const Tinted = styled.div`
	/* box model */
	grid-column: 1/3;
	grid-row: 1;
	position: relative;
	float: left;
	width: 100%;
	z-index: 2;

	/* visual decorations */
	cursor: pointer;

	:before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
<<<<<<< HEAD
		background: rgba(112, 143, 121, 0.7);
		transition: all 0.3s linear;
=======
		background-color: ${({ theme }) => theme.pastelGreen.dark};
		opacity: 0.7;
		transition: background 0.3s linear;
>>>>>>> parent of 39d1230 (reverse project image and description for even children)
	}

	:hover:before {
		background: none;
		border: 2px solid ${({ theme }) => theme.pastelGreen.dark};
	}
`;

export const ProjectImg = styled.img`
	/* box model */
	width: 100%;
	height: 100%;

	/* visual decorations */
	object-fit: cover;
`;

export const ProjectDetails = styled.div`
	/* box model */
	border-radius: 0 0 10px 10px;
	grid-column: 2 / 5;
	grid-row: 1;
	margin: 30px 0;
	z-index: 3;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelGreen.lighter};
`;

export const ProjectHeader = styled.div`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	margin: 0;
`;

export const ProjectTitle = styled.h2`
	/* box model */
	margin: 0;

	/* typography */
	font-size: 1.5rem;
	font-weight: 500;
	font-size: 1.875rem;
	line-height: 2.25rem;
`;

export const Icons = styled.div``;

export const ColorBar = styled.div`
	/* box model */
	height: 10px;
	width: 100%;
	margin-right: 10px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelGreen.dark};
`;

export const ProjectContent = styled.div`
	/* box model */
	padding: 10px;
	padding-top: 0px;
	border-radius: 0 0 10px 10px;
`;

export const ProjectDesc = styled.p`
	/* box model */
	margin: 0;

	/* typography */
	font-size: 1.125rem;
	line-height: 1.75rem;
`;

export const ProjectTools = styled.div`
	/* box model */
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 10px 0;

	/* visual decorations */
`;

export const Link = styled.a`
	/* box model */
	margin: 0 5px;

	/* typography */
	color: black;

	svg {
		/* typography */
		font-size: 30px;

		/* visual decorations */
		transition: 0.2s all ease-in-out;

		&:hover {
			/* typography */
			color: white;
		}
	}
`;
