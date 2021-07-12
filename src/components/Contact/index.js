import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

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
	ErrorMsg,
	Submit,
} from "./styles";

const Contact = () => {
	// manage form data state
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const { name, email, message } = formState;

	const [errorMessage, setErrorMessage] = useState("");

	// manage changes to form data
	const handleChange = (event) => {
		if (event.target.name === "email") {
			const isValid = validateEmail(event.target.value);
			if (!isValid) {
				setErrorMessage("email is invalid");
			} else {
				setErrorMessage("");
			}
		} else {
			if (!event.target.value.length) {
				setErrorMessage(`${event.target.name} is required`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [event.target.name]: event.target.value });
		}
	};

	// handle event form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
	};

	return (
		<>
			<Anchor id={"contact"}></Anchor>
			<ContactSection>
				<ContactHeader>
					<ColorBar></ColorBar>
					<HeaderText>Contact Me</HeaderText>
				</ContactHeader>
				<ContactForm onSubmit={handleSubmit}>
					<FormLabel htmlFor="name">Name:</FormLabel>
					<InfoInput
						name="name"
						type="text"
						defaultValue={name}
						onBlur={handleChange}
					></InfoInput>
					<FormLabel htmlFor="email">Email Address:</FormLabel>
					<InfoInput
						name="email"
						type="email"
						defaultValue={email}
						onBlur={handleChange}
					></InfoInput>
					<FormLabel htmlFor="message">Message:</FormLabel>
					<MessageInput
						name="message"
						defaultValue={message}
						onBlur={handleChange}
					></MessageInput>
					{errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}
					<Submit type="submit">Send Email</Submit>
				</ContactForm>
			</ContactSection>
		</>
	);
};

export default Contact;
