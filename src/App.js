import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import MediaQuery from "react-responsive";

import Nav from "./components/Nav";
import Title from "./components/Title";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const Grid = styled.div`
	/* box model */
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const Content = styled.div`
	height: 100vh;
	overflow: scroll;
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<MediaQuery maxWidth={640}>
					<Nav></Nav>
					<Title></Title>
					<About></About>
					<Portfolio></Portfolio>
					<Resume></Resume>
					<Contact></Contact>
					<Footer></Footer>
				</MediaQuery>
				<MediaQuery minWidth={641}>
					<Grid>
						<Title></Title>
						<Content>
							<Nav></Nav>
							<About></About>
							<Portfolio></Portfolio>
							<Resume></Resume>
							<Contact></Contact>
							<Footer></Footer>
						</Content>
					</Grid>
				</MediaQuery>
			</>
		</ThemeProvider>
	);
};

export default App;
