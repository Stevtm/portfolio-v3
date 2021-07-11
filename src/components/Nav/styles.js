import styled from "styled-components";

export const Header = styled.header`
	/* box model */
	align-items: center;
	display: flex;
	flex-direction: row;
	margin: 0;
	position: fixed;
	width: 100%;
	background-color: whitesmoke;
	border-bottom: 2px solid grey;
	/* backdrop-filter: blur(20px); */
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
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 0;
	margin: 0;
	width: 50%;

	/* visual decorations */
	list-style: none;
`;

export const NavTitle = styled.li`
	/* box model */
	padding: 5px 5px;
	margin: 8px 0;

	/* typography */
	color: black;
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.5rem;
	text-align: center;

	/* visual decorations */
	cursor: pointer;
	transition: all 0.2s ease-out;
`;

export const NavLink = styled.a`
	/* visual decorations */
	color: ${({ theme }) => theme.secondary};
	text-decoration: none;

	&:hover {
		color: black;
	}
`;
