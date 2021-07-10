import styled from "styled-components";

export const Header = styled.header`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: row;
	height: 40px;
	justify-content: space-between;
	margin: 5px 1rem;
`;

export const Logo = styled.a`
	/* typography */
	color: green;

	width: 40px;

	/* visual decorations */
	text-decoration: none;

	@media (max-width: 640px) {
		position: fixed;
		top: 1.5rem;
		left: 1.5rem;
	}
`;

export const NavBar = styled.ul`
	/* box model */
	display: flex;
	flex-direction: row;

	/* visual decorations */
	list-style: none;
`;

export const NavTitle = styled.li`
	/* box model */
	padding: 5px 10px;

	/* typography */
	color: black;
	&:hover {
		color: green;
	}
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;

	/* visual decorations */
	cursor: pointer;
	transition: all 0.2s ease-out;
`;

export const NavLink = styled.a`
	/* box model */

	/* visual decorations */
	color: black;
	text-decoration: none;
`;
