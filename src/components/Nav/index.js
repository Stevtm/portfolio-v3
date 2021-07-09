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

const NavLink = styled.li`
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
						<NavLink>About Me</NavLink>
						<NavLink>Portfolio</NavLink>
						<NavLink>Contact</NavLink>
						<NavLink>Resume</NavLink>
					</NavBar>
				</nav>
			</MediaQuery>
		</Header>
	);
};

export default Nav;
