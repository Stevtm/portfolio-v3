import styled from "styled-components";

export const Anchor = styled.span`
	/* box model */
	display: block;
	height: calc(40px);
	margin-top: -40px;
	visibility: hidden;
`;

export const AboutSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelBlue.light};

	@media (min-width: 671px) {
		padding-top: 60px;
	}
`;

export const ColorBar = styled.div`
	/* box model */
	width: 0.45rem;
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
	font-size: 2.25rem;
	font-weight: 400;
	line-height: 2.5rem;
`;

export const AboutContent = styled.div`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: column;

	@media (min-width: 1281px) {
		flex-direction: row;
	}
`;

export const AboutText = styled.p`
	/* box model */
	margin: 10px 0;
	width: 100%;

	/* typography */
	font-size: 1.125rem;
	line-height: 1.75rem;
`;

export const ProfilePic = styled.img`
	/* box model */
	margin: 10px 0;
	width: 80%;
	max-width: 300px;

	/* visual decorations */
	border-radius: 100%;
`;
