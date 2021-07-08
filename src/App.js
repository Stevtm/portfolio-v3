import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";

// define styles
const Title = styled.h1`
	font-size: 50px;
	text-align: center;
`;

const App = () => {
	return (
		<>
			<Nav></Nav>
			<Title>Test App!</Title>
		</>
	);
};

export default App;
