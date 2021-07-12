import styled from "styled-components";

export const Anchor = styled.span`
	/* box model */
	display: block;
	height: calc(40px);
	margin-top: -40px;
	visibility: hidden;
`;

export const ContactSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelPurple.light};
`;

export const ContactHeader = styled.div`
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
	background-color: ${({ theme }) => theme.pastelPurple.dark};
`;

export const HeaderText = styled.h2`
	/* box model */
	margin: 5px 0;

	/* typography */
	color: ${({ theme }) => theme.pastelPurple.darker};
	font-size: 2.25rem;
	font-weight: 400;
	line-height: 2.5rem;
`;

export const ContactForm = styled.form`
	/* box model */
	display: flex;
	flex-direction: column;
	max-width: 500px;
	margin: 0 auto;
`;

export const FormLabel = styled.label`
	/* box model */
	margin: 5px 0;

	/* typography */
	font-size: 1.125rem;
	line-height: 1.75rem;
`;

export const InfoInput = styled.input`
	/* box model */
	height: 30px;
	border-radius: 5px;
	border: 1px solid black;

	/* typography */
	font-size: 1.125rem;
	line-height: 1.75rem;
`;

export const MessageInput = styled.textarea`
	/* box model */
	height: 6em;
	margin-bottom: 15px;
	border-radius: 5px;
	border: 1px solid black;

	/* typography */
	font-family: inherit;
	font-size: 1.125rem;
	line-height: 1.75rem;
`;

export const ErrorMsg = styled.p`
	/* box model */
	padding: 0 0 10px 0;
	margin: 0 auto;

	/* typography */
	color: red;
	font-size: 1.125rem;
	line-height: 1.75rem;
`;

export const Submit = styled.button`
	/* box model */
	border: none;
	border-radius: 5px;
	padding: 8px 8px;
	margin: 0 auto;

	/* typography */
	color: white;
	font-size: 1.125rem;
	line-height: 1.75rem;

	/* visual decorations */
	background-color: ${({ theme }) => theme.pastelPurple.darker};
`;
