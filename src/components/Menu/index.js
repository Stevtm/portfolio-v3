import styled from "styled-components";

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.secondary};
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	right: 0;
	transform: translateX(100%);
	transition: transform 0.3s ease-in-out;

	/* @media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
	} */

	a {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: ${({ theme }) => theme.tertiary};
		text-decoration: none;
		transition: color 0.3s linear;

		/* @media (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 1.5rem;
			text-align: center;
		} */

		/* &:hover {
			color: ${({ theme }) => theme.primaryHover};
		} */
	}
`;

const Menu = () => {
	return (
		<StyledMenu>
			<a href="/">About Me</a>
			<a href="/">Portfolio</a>
			<a href="/">Contact</a>
			<a href="/">Resume</a>
		</StyledMenu>
	);
};

export default Menu;
