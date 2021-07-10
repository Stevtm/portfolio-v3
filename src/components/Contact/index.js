import React from "react";

// import styled components
import {
	ContactSection,
	ContactHeader,
	ContactForm,
	FormLabel,
	InfoInput,
	MessageInput,
	Submit,
} from "./styles";

const Contact = () => {
	return (
		<ContactSection id={"contact"}>
			<ContactHeader>Contact Me</ContactHeader>
			<ContactForm>
				<FormLabel htmlFor="name">Name:</FormLabel>
				<InfoInput name="name" type="text"></InfoInput>
				<FormLabel htmlFor="email">Email Address:</FormLabel>
				<InfoInput name="email" type="text"></InfoInput>
				<FormLabel htmlFor="message">Message:</FormLabel>
				<MessageInput name="message"></MessageInput>
				<Submit type="submit">Submit</Submit>
			</ContactForm>
		</ContactSection>
	);
};

export default Contact;
