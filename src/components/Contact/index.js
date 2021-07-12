import React from "react";

// import styled components
import {
	Anchor,
	ContactSection,
	ContactHeader,
	ColorBar,
	HeaderText,
	ContactForm,
	FormLabel,
	InfoInput,
	MessageInput,
	Submit,
} from "./styles";

const Contact = () => {
	return (
		<>
			<Anchor id={"contact"}></Anchor>
			<ContactSection>
				<ContactHeader>
					<ColorBar></ColorBar>
					<HeaderText>Contact Me</HeaderText>
				</ContactHeader>
				<ContactForm>
					<FormLabel htmlFor="name">Name:</FormLabel>
					<InfoInput name="name" type="text"></InfoInput>
					<FormLabel htmlFor="email">Email Address:</FormLabel>
					<InfoInput name="email" type="text"></InfoInput>
					<FormLabel htmlFor="message">Message:</FormLabel>
					<MessageInput name="message"></MessageInput>
					<Submit type="submit">Send Email</Submit>
				</ContactForm>
			</ContactSection>
		</>
	);
};

export default Contact;
