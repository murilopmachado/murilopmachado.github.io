import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "./logo";

import "./styles/navBar.css";

const NavBar = () => {
	const { pathname } = useLocation();
	const [visible, setVisible] = useState(true);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY < 50) {
				setVisible(true);
			} else if (currentScrollY < lastScrollY.current) {
				setVisible(true);
			} else if (currentScrollY > lastScrollY.current) {
				setVisible(false);
			}
			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ path: "/", label: "Home", key: "home" },
		{ path: "/projects", label: "Projects", key: "projects" },
		{ path: "/contact", label: "Contact", key: "contact" },
	];

	return (
		<div className={`nav-container${visible ? "" : " nav-hidden"}`}>
			<div className="nav-logo">
				<Logo width={46} />
			</div>
			<nav className="navbar">
				<ul className="nav-list">
					{navItems.map((item) => (
						<li
							key={item.key}
							className={
								pathname === item.path
									? "nav-item active"
									: "nav-item"
							}
						>
							<Link to={item.path}>{item.label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
