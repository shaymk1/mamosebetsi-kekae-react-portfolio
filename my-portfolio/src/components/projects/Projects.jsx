import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import './projects.css';

const Projects = () => {
	return (
		<section id="projects">
			<h2>My Projects</h2>
			<div className=" container portfolio__container">
				{/*img-1*/}
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img className="" src={IMG1} alt="" />
					</div>
					<h3>NFT market place with Next-JS</h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/shaymk1"
							className="btn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://github.com/shaymk1"
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
						>
							Live Demo
						</a>
					</div>
				</article>

				{/*img-2*/}
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img className="" src={IMG2} alt="" />
					</div>
					<h3>Web3 Flashloans </h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/shaymk1"
							className="btn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://github.com/shaymk1"
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
						>
							Live Demo
						</a>
					</div>
				</article>

				{/*img-3*/}
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img className="" src={IMG3} alt="" />
					</div>
					<h3>Crypto Trading on Binace</h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/shaymk1"
							className="btn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://github.com/shaymk1"
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
						>
							Live Demo
						</a>
					</div>
				</article>

				{/*img-4*/}
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img className="" src={IMG4} alt="" />
					</div>
					<h3>My Own Blockchain using Python</h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/shaymk1"
							className="btn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://github.com/shaymk1"
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
						>
							Live Demo
						</a>
					</div>
				</article>

				{/*img-5*/}
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img className="" src={IMG5} alt="" />
					</div>
					<h3>Building Metaverse with Three Js</h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/shaymk1"
							className="btn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://github.com/shaymk1"
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
						>
							Live Demo
						</a>
					</div>
				</article>

				{/*img-6*/}
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img className="" src={IMG6} alt="" />
					</div>
					<h3>NFT market place with Next-JS</h3>
					<div className="portfolio__item-cta">
						<a
							href="https://github.com/shaymk1"
							className="btn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://github.com/shaymk1"
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
						>
							Live Demo
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Projects;
