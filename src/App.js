import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import Nav from "./components/Nav";
import Title from "./components/Title";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<div>
					<Nav></Nav>
					<Title></Title>
					<About></About>
					<Projects></Projects>
				</div>
			</>
		</ThemeProvider>
		// <>

		// </>
	);
};

export default App;
