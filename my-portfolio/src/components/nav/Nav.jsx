import { useState } from 'react';
import { AiFillProject, AiTwotoneHome } from 'react-icons/ai';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import './nav.css';

const Nav = () => {
	const[activeNav, setActiveNav] = useState('#');
	return (
		<nav>
			<a href="#home" className={activeNav === '#' ? 'active' : ''}>
				<AiTwotoneHome />
			</a>
			<a href="#about"  >
				<FaUserCircle />
			</a>

			<a href="#skills">
				<BsFillFileEarmarkCodeFill />
			</a>
			<a href="#projects">
				<AiFillProject />
			</a>

			<a href="#contact">
				<MdContactPhone />
			</a>
		</nav>
	);
};

export default Nav;

// <a href="#skills">
// 	<GiSkills />
// </a>

// <a href="#projects">
// 	<FaLaptopCode />
// </a>;
