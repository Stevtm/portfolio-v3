import React from "react";
import styled from "styled-components";

import GitHubIcon from "../../assets/images/GitHub.png";
import InstagramIcon from "../../assets/images/Instagram.png";
import LinkedinIcon from "../../assets/images/LinkedIn.png";

const FooterContainer = styled.div`
	/* box model */
	padding: 5px 10px;
	margin: 20px 0;
	width: 100%;

	/* visual decorations */
	background-color: ${({ theme }) => theme.secondary};
`;

const Link = styled.a``;

const Icon = styled.img`
	/* box model */
	width: 35px;
`;

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
