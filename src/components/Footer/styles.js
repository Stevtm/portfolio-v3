import styled from "styled-components";

export const FooterContainer = styled.div`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: column;
	padding: 15px 10px;
	width: 100%;

	/* visual decorations */
	background-color: ${({ theme }) => theme.secondary};
`;

export const Links = styled.div`
	/* box model */
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 0 0;
`;

export const Link = styled.a`
	/* box model */
	padding: 0 10px;

	/* typography */
	font-size: 2rem;

	/* visual decorations */

	svg {
		/* visual decorations */
		color: white;
	}
`;

export const Copyright = styled.p`
	/* box model */
	margin: 0;
	padding: 0;

	/* typography */
	color: white;

	/* visual decorations */
`;
