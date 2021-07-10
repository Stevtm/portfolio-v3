import React, { useState } from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import Burger from "../Burger";
import Menu from "../Menu";

// --- styled components ---

const Header = styled.header`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 5px 1rem;
`;

const Logo = styled.a`
	/* typography */
	color: green;
	font-size: 2.25rem;
	line-height: 1rem;

	/* visual decorations */
	text-decoration: none;
`;

const NavBar = styled.ul`
	/* box model */
	display: flex;
	flex-direction: row;

	/* visual decorations */
	list-style: none;
`;

const NavTitle = styled.li`
	/* box model */
	padding: 5px 10px;

	/* typography */
	color: black;
	&:hover {
		color: green;
	}
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;

	/* visual decorations */
	cursor: pointer;
	transition: all 0.2s ease-out;
`;

const NavLink = styled.a`
	/* box model */

	/* visual decorations */
	color: black;
	text-decoration: none;
`;

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
