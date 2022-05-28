import ME from '../../assets/profile.jpeg';
import CTA from './CTA';
import './header.css';
import HeaderSocial from './HeaderSocial';

const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello, I am</h5>
				<h1>Mamosebetsi kekae</h1>
				<h5 className="text-light">Blockchain Solidity Developer</h5>
				<CTA />
				<HeaderSocial />
				<div className="me">
					<img  className = 'me' src={ME} alt="my first profile pic" />
				</div>
				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
