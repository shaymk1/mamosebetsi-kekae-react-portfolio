import './footer.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer>
			<a href="#/" className="footer__logo">
				Bye Felicia Logo
			</a>

			<ul className="permalinks">
				<li>
					<a href="#/">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="https://linkedin.com" target="_blank" rel="noreferrer">
					<BsLinkedin />
				</a>
				<a href="https://github.com/shaymk1" target="_blank" rel="noreferrer">
					<BsGithub />
				</a>
			</div>

			<div className="footer__copyright">
			<small>&copy; Mamosebetsi Kekae. All Rights Reserved</small>
			
			</div>
		</footer>
	);
};

export default Footer;
