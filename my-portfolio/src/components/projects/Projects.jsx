import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import './projects.css';

const projects = [
	/* project-1 */
	{
		id: 1,
		image: IMG1,
		title: 'Crypto Trading on Binance',
		github: 'https://github.com/shaymk1',
		demo: 'https://Dribble.com/shaymk1',
	},
	/* project-2 */
	{
		id: 2,
		image: IMG2,
		title: 'Crypto Flashloans with python',
		github: 'https://github.com/shaymk1',
		demo: 'https://Dribble.com/shaymk1',
	},
	/* project-3 */
	{
		id: 3,
		image: IMG3,
		title: 'Crypto Trading on Binance',
		github: 'https://github.com/shaymk1',
		demo: 'https://Dribble.com/shaymk1',
	},
	/* project-4 */
	{
		id: 4,
		image: IMG4,
		title: 'Crypto Trading on Binance',
		github: 'https://github.com/shaymk1',
		demo: 'https://Dribble.com/shaymk1',
	},
	/* project-5 */
	{
		id: 5,
		image: IMG5,
		title: 'Crypto Trading on Binance',
		github: 'https://github.com/shaymk1',
		demo: 'https://Dribble.com/shaymk1',
	},
	/* project-6 */
	{
		id: 6,
		image: IMG6,
		title: 'Crypto Trading on Binance',
		github: 'https://github.com/shaymk1',
		demo: 'https://Dribble.com/shaymk1',
	},
];

const Projects = () => {
	return (
		<section id="projects">
			<h2>My Projects</h2>
			<div className=" container portfolio__container">
				{projects.map(({ id, image, title, github, demo }) => {
					return (
						<article key="id" className="portfolio__item">
							<div className="portfolio__item-image">
								<img className="" src={image} alt="{title}" />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a
									href="{github}"
									className="btn"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
								<a
									href="{demo}"
									className='btn btn-primary'
									target="_blank"
									rel="noreferrer"
								>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;

// <section id="projects">
// 			<h2>My Projects</h2>
// 			<div className=" container portfolio__container">
// 				{/*img-1*/}
// 				<article className="portfolio__item">
// 					<div className="portfolio__item-image">
// 						<img className="" src={IMG1} alt="" />
// 					</div>
// 					<h3>NFT market place with Next-JS</h3>
// 					<div className="portfolio__item-cta">
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Github
// 						</a>
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn btn-primary"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Live Demo
// 						</a>
// 					</div>
// 				</article>

// 				{/*img-2*/}
// 				<article className="portfolio__item">
// 					<div className="portfolio__item-image">
// 						<img className="" src={IMG2} alt="" />
// 					</div>
// 					<h3>Web3 Flashloans </h3>
// 					<div className="portfolio__item-cta">
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Github
// 						</a>
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn btn-primary"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Live Demo
// 						</a>
// 					</div>
// 				</article>

// 				{/*img-3*/}
// 				<article className="portfolio__item">
// 					<div className="portfolio__item-image">
// 						<img className="" src={IMG3} alt="" />
// 					</div>
// 					<h3>Crypto Trading on Binace</h3>
// 					<div className="portfolio__item-cta">
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Github
// 						</a>
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn btn-primary"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Live Demo
// 						</a>
// 					</div>
// 				</article>

// 				{/*img-4*/}
// 				<article className="portfolio__item">
// 					<div className="portfolio__item-image">
// 						<img className="" src={IMG4} alt="" />
// 					</div>
// 					<h3>My Own Blockchain using Python</h3>
// 					<div className="portfolio__item-cta">
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Github
// 						</a>
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn btn-primary"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Live Demo
// 						</a>
// 					</div>
// 				</article>

// 				{/*img-5*/}
// 				<article className="portfolio__item">
// 					<div className="portfolio__item-image">
// 						<img className="" src={IMG5} alt="" />
// 					</div>
// 					<h3>Building Metaverse with Three Js</h3>
// 					<div className="portfolio__item-cta">
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Github
// 						</a>
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn btn-primary"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Live Demo
// 						</a>
// 					</div>
// 				</article>

// 				{/*img-6*/}
// 				<article className="portfolio__item">
// 					<div className="portfolio__item-image">
// 						<img className="" src={IMG6} alt="" />
// 					</div>
// 					<h3>NFT market place with Next-JS</h3>
// 					<div className="portfolio__item-cta">
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Github
// 						</a>
// 						<a
// 							href="https://github.com/shaymk1"
// 							className="btn btn-primary"
// 							target="_blank"
// 							rel="noreferrer"
// 						>
// 							Live Demo
// 						</a>
// 					</div>
// 				</article>
// 			</div>
// 		</section>
