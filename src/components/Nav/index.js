import React, { useState } from "react";
import MediaQuery from "react-responsive";

import Burger from "../Burger";
import Menu from "../Menu";
import { ReactComponent as SLogo } from "../../assets/images/Logo.svg";

// import styled components
import {
	Header,
	CollapsedContainer,
	Logo,
	NavBar,
	NavTitle,
	NavLink,
} from "./styles";

const Nav = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<Header>
			<MediaQuery maxWidth={670}>
				<CollapsedContainer>
					<Logo href="/">
						<SLogo></SLogo>
					</Logo>
					<div>
						<Burger open={openBurger} setOpen={setOpenBurger}></Burger>
						<Menu open={openBurger} setOpen={setOpenBurger}></Menu>
					</div>
				</CollapsedContainer>
			</MediaQuery>
			<MediaQuery minWidth={671}>
				<nav style={{ width: "100%" }}>
					<NavBar>
						<NavTitle>
							<NavLink href="#about">About Me</NavLink>
						</NavTitle>
						<NavTitle>
							<NavLink href="#portfolio">Portfolio</NavLink>
						</NavTitle>
						<NavTitle>
							<NavLink href="#resume">Résumé</NavLink>
						</NavTitle>
						<NavTitle>
							<NavLink href="#contact">Contact Me</NavLink>
						</NavTitle>
					</NavBar>
				</nav>
			</MediaQuery>
		</Header>
	);
};

export default Nav;
