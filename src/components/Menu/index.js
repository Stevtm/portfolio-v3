import React from "react";
import { bool } from "prop-types";

// import styled components
import { StyledMenu } from "./styles";

const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
			<a href="/">About Me</a>
			<a href="/">Portfolio</a>
			<a href="/">Contact</a>
			<a href="/">Resume</a>
		</StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired,
};

export default Menu;
