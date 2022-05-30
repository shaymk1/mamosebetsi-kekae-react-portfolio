import './portfolio.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h2>My Services</h2>.{' '}
			<div className=" container services__container">
				{/*blockchain-dev*/}
				<article className="service">
					<div className=" service__head">
						<h3>Blockchain Solidity Development</h3>
					</div>
					<ul className="sevice__list">
						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>

						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>

						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>

						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>
					</ul>
				</article>
				{/*blockchain-dev end*/}

				{/*SEO beggin*/}
				<article className="service">
					<div className=" service__head">
						<h3>SEO Optimization</h3>
					</div>
					<ul className="sevice__list">
						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>

						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>

						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>

						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>
						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>
					</ul>
				</article>
				{/*SEO end*/}

				{/*React beggin*/}
				<article className="service">
					<div className=" service__head">
						<h3>React/Next JS Development</h3>
					</div>
					<ul className="sevice__list">
						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>

						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>

						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>

						<li>
							<AiOutlineCheckCircle className="service__list-icon" />
							<p>Lorem ipsum dolor sit amet</p>
						</li>
					</ul>
				</article>
				{/*React end*/}
			</div>
		</section>
	);
};

export default Portfolio;
