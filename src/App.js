import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import Nav from "./components/Nav";
import Burger from "./components/Burger";
import Menu from "./components/Menu";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<div>
					<Nav></Nav>
					<Burger></Burger>
					<Menu></Menu>
					<h1>Title</h1>
				</div>
			</>
		</ThemeProvider>
		// <>

		// </>
	);
};

export default App;
