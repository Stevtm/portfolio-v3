import React from "react";

// import icons from assets folder
import GitHubIcon from "../../assets/images/GitHub.png";
import InstagramIcon from "../../assets/images/Instagram.png";
import LinkedinIcon from "../../assets/images/LinkedIn.png";

// import styled components
import { FooterContainer, Link, Icon } from "./styles";

const Footer = () => {
	return (
		<FooterContainer>
			<Link href="https://github.com/Stevtm" target="_blank">
				<Icon src={GitHubIcon}></Icon>
			</Link>
			<Link href="https://www.linkedin.com/in/stevenmaddison/" target="_blank">
				<Icon src={InstagramIcon}></Icon>
			</Link>
			<Link href="https://www.instagram.com/steeeeeeeeeeeeev/" target="_blank">
				<Icon src={LinkedinIcon}></Icon>
			</Link>
		</FooterContainer>
	);
};

export default Footer;
