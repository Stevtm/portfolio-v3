import styled from "styled-components";

export const Anchor = styled.span`
	/* box model */
	display: block;
	height: calc(40px);
	margin-top: -40px;
	visibility: hidden;

	@media (min-width: 671px) {
		height: 0;
	}
`;

export const AboutSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelBlue.lighter};

	@media (min-width: 671px) {
		padding-top: 60px;
	}
`;

export const ColorBar = styled.div`
	/* box model */
	width: 0.45rem;
	margin-right: 10px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelBlue.DEFAULT};
`;

export const AboutHeader = styled.div`
	/* box model */
	display: flex;
	flex-direction: row;
	text-align: center;
	margin: 10px 0;
`;

export const HeaderText = styled.h2`
	/* box model */
	margin: 5px 0;

	/* typography */
	color: ${({ theme }) => theme.pastelBlue.dark};
	font-family: "Staatliches";
	font-size: 3rem;
	font-weight: 500;
	line-height: 1;
`;

export const AboutContent = styled.div`
	/* box model */
	align-items: center;
	border-top: 10px solid ${({ theme }) => theme.pastelBlue.DEFAULT};
	border-radius: 0px 0px 30px 30px;
	display: flex;
	flex-direction: column;
	padding: 15px;

	/* visual decorations */
	background-color: white;

	@media (min-width: 1281px) {
		flex-direction: row;
	}
`;

export const AboutText = styled.p`
	/* box model */
	padding: 0px 5px;
	margin: 10px 0;
	width: 100%;

	/* typography */
	font-size: 1.125rem;
	line-height: 1.75rem;
`;

export const ProfilePic = styled.img`
	/* box model */
	border: 5px solid ${({ theme }) => theme.pastelBlue.light};
	border-radius: 100%;
	margin: 10px 5px;
	width: 80%;
	max-width: 300px;
`;
