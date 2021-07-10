import React, { useState } from "react";
import MediaQuery from "react-responsive";

import Burger from "../Burger";
import Menu from "../Menu";

// import styled components
import { Header, Logo, NavBar, NavTitle, NavLink } from "./styles";

const Nav = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<Header>
			<h2>
				<Logo href="/">SM</Logo>
			</h2>
			<MediaQuery maxWidth={640}>
				<div>
					<Burger open={openBurger} setOpen={setOpenBurger}></Burger>
					<Menu open={openBurger} setOpen={setOpenBurger}></Menu>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={641}>
				<nav>
					<NavBar>
						<NavTitle>
							<NavLink href="#about">About Me</NavLink>
						</NavTitle>
						<NavTitle>
							<NavLink href="#portfolio">Portfolio</NavLink>
						</NavTitle>
						<NavTitle>
							<NavLink href="#contact">Contact Me</NavLink>
						</NavTitle>
						<NavTitle>Resume</NavTitle>
					</NavBar>
				</nav>
			</MediaQuery>
		</Header>
	);
};

export default Nav;
