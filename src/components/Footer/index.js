import React from "react";

// import icons from assets folder
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// import styled components
import { FooterContainer, Link, Links, Copyright } from "./styles";

const Footer = () => {
	return (
		<FooterContainer>
			<Links>
				<Link href="https://github.com/Stevtm" target="_blank">
					<FaGithub></FaGithub>
				</Link>
				<Link
					href="https://www.linkedin.com/in/stevenmaddison/"
					target="_blank"
				>
					<FaLinkedin></FaLinkedin>
				</Link>
				<Link
					href="https://www.instagram.com/steeeeeeeeeeeeev/"
					target="_blank"
				>
					<FaInstagram></FaInstagram>
				</Link>
			</Links>
			<Copyright>© Steven Maddison 2021</Copyright>
		</FooterContainer>
	);
};

export default Footer;
