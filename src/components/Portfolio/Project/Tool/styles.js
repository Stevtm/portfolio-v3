import styled from "styled-components";

export const ToolBubble = styled.div`
	/* box model */
	border-radius: 7px;
	padding: 5px 8px;
	margin: 5px 5px;

	/* typography */
	color: white;

	/* visual decorations */
	background-color: ${({ theme }) => theme.secondary};
`;
