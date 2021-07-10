import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
	/* box model */
	padding: 20px;

	/* visual decorations */
`;

const ContactHeader = styled.h2`
	/* box model */
	text-align: center;

	/* typography */
	font-size: 2.25rem;
	line-height: 2.5rem;
`;

const ContactForm = styled.form`
	/* box model */
	display: flex;
	flex-direction: column;

	/* visual decorations */
`;

const FormLabel = styled.label`
	/* box model */

	/* visual decorations */
`;

const InfoInput = styled.input`
	/* box model */

	/* visual decorations */
`;

const MessageInput = styled.textarea`
	/* box model */

	/* visual decorations */
`;

const Contact = () => {
	return (
		<ContactSection>
			<ContactHeader>Contact Me</ContactHeader>
			<ContactForm>
				<FormLabel for="name">Name:</FormLabel>
				<InfoInput name="name" type="text"></InfoInput>
				<FormLabel for="email">Email Address:</FormLabel>
				<InfoInput name="email" type="text"></InfoInput>
				<FormLabel for="message">Message:</FormLabel>
				<MessageInput name="message"></MessageInput>
			</ContactForm>
		</ContactSection>
	);
};

export default Contact;
