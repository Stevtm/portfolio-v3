import styled from "styled-components";

export const FooterContainer = styled.div`
	/* box model */
	padding: 5px 10px;
	margin: 20px 0;
	width: 100%;

	/* visual decorations */
	background-color: ${({ theme }) => theme.secondary};
`;

export const Link = styled.a``;

export const Icon = styled.img`
	/* box model */
	width: 35px;
`;
