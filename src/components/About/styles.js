import styled from "styled-components";

export const AboutSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelBlue.light};
`;

export const ColorBar = styled.div`
	/* box model */
	width: 10px;
	margin-right: 10px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelBlue.dark};
`;

export const AboutHeader = styled.div`
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
	color: ${({ theme }) => theme.pastelBlue.darker};
	font-size: 2.5rem;
	line-height: 2.5rem;
	/* text-transform: uppercase; */
`;

export const AboutContent = styled.div`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export const AboutText = styled.p`
	/* box model */
	margin: 10px 0;
	width: 100%;

	/* typography */
	font-size: 1.5rem;
`;

export const ProfilePic = styled.img`
	/* box model */
	margin: 10px 0;
	width: 80%;

	/* visual decorations */
	border-radius: 100%;
`;
