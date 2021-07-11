import React from "react";
import { bool, func } from "prop-types";

// import styled components
import { StyledMenu } from "./styles";

const Menu = ({ open, setOpen }) => {
	return (
		<StyledMenu open={open}>
			<a href="#about" onClick={() => setOpen(false)}>
				About Me
			</a>
			<a href="#portfolio" onClick={() => setOpen(false)}>
				Portfolio
			</a>
			<a href="#resume" onClick={() => setOpen(false)}>
				Résumé
			</a>
			<a href="#contact" onClick={() => setOpen(false)}>
				Contact
			</a>
		</StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired,
	setOpen: func.isRequired,
};

export default Menu;
