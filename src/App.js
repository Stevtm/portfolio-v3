import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import Nav from "./components/Nav";
import Title from "./components/Title";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<div>
					<Nav></Nav>
					<Title></Title>
				</div>
			</>
		</ThemeProvider>
		// <>

		// </>
	);
};

export default App;
