import React from "react";
import { bool, func } from "prop-types";

// import styled components
import { StyledBurger } from "./styles";

const Burger = ({ open, setOpen, onClickOutside }) => {
	return (
		<StyledBurger
			open={open}
			onClick={async () => {
				await setOpen(!open);

				if (!open) {
					document.body.setAttribute("style", "overflow: hidden");
				} else {
					document.body.setAttribute("style", "overflow: auto");
				}
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
