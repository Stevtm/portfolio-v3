import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import Nav from "./components/Nav";
import Title from "./components/Title";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<div>
					<Nav></Nav>
					<Title></Title>
					<About></About>
					<Portfolio></Portfolio>
					<Contact></Contact>
					<Resume></Resume>
					<Footer></Footer>
				</div>
			</>
		</ThemeProvider>
	);
};

export default App;
