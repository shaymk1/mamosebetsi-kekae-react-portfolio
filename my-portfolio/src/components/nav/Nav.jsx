import { useState } from 'react';
import { AiFillProject, AiTwotoneHome } from 'react-icons/ai';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import './nav.css';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	return (
		<nav>
			<a
				href="/#"
				onClick={() => setActiveNav('#')}
				className={activeNav === '#' ? 'active' : ''}
			>
				<AiTwotoneHome />
			</a>
			<a
				href="#about"
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<FaUserCircle />
			</a>

			<a
				href="#skills"
				onClick={() => setActiveNav('#skills')}
				className={activeNav === '#skills' ? 'active' : ''}
			>
				<BsFillFileEarmarkCodeFill />
			</a>
			<a
				href="#projects"
				onClick={() => setActiveNav('#projects')}
				className={activeNav === '#projects' ? 'active' : ''}
			>
				<AiFillProject />
			</a>

			<a
				href="#contact"
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			>
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
