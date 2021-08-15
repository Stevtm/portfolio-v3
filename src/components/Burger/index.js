import React from "react";
import { bool, func } from "prop-types";

// import styled components
import { StyledBurger } from "./styles";

const Burger = ({ open, setOpen, onClickOutside }) => {
	return (
		<StyledBurger
			open={open}
			onClick={() => {
				setOpen(!open);
			}}
		>
			<div></div>
			<div></div>
			<div></div>
		</StyledBurger>
	);
};

Burger.propTypes = {
	open: bool.isRequired,
	setOpen: func.isRequired,
};

export default Burger;
