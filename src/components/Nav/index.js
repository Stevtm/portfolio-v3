import React, { useState } from "react";

import Burger from "../Burger";
import Menu from "../Menu";
import { ReactComponent as SLogo } from "../../assets/images/Logo.svg";

// import styled components
import { Header, CollapsedContainer, Logo } from "./styles";

const Nav = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<Header>
			<CollapsedContainer>
				<Logo href="/">
					<SLogo></SLogo>
				</Logo>
				<div>
					<Burger open={openBurger} setOpen={setOpenBurger}></Burger>
					<Menu open={openBurger} setOpen={setOpenBurger}></Menu>
				</div>
			</CollapsedContainer>
		</Header>
	);
};

export default Nav;
