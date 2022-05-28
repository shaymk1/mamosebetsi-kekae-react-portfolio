import { BsBookmarkCheckFill } from 'react-icons/bs';
import './skills.css';

const Skills = () => {
	return (
		<section id="skills">
			<h2>My Skills</h2>
			<div className="container experience__container ">
				<div className="experience__frontend">
					<h3>FrontEnd Development</h3>
					<div className="experience__content">
						{/* fornt-end */}
						{/* skill-1 */}
						<article className="experience__details">
							<BsBookmarkCheckFill className="experience__details-icon" />
							<div>
								<h4>HTML</h4>
								<small className="text-align">Experienced</small>
							</div>
						</article>

						{/* skill-2 */}
						<article className="experience__details">
							<BsBookmarkCheckFill className="experience__details-icon" />
							<div>
								<h4>CSS / Bootstrap</h4>
								<small className="text-align">Experienced</small>
							</div>
						</article>

						{/* skill-3 */}
						<article className="experience__details">
							<BsBookmarkCheckFill className="experience__details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-align">Intermediate</small>
							</div>
						</article>

						{/* skill-4 */}
						<article className="experience__details">
							<BsBookmarkCheckFill className="experience__details-icon" />
							<div>
								<h4>React</h4>
								<small className="text-align">Intermediate</small>
							</div>
						</article>
					</div>
				</div>
				{/* end of front-end*/}

				<div className="experience__frontend">
					<h3>BackEnd Development</h3>
					<div className="experience__content">
						{/* back-end */}
						{/* skill-1 */}
						<article className="experience__details">
							<BsBookmarkCheckFill className="experience__details-icon" />
							<div>
								<h4>Solidity</h4>
								<small className="text-align">Intermediate</small>
							</div>
						</article>

						{/* skill-2 */}
						<article className="experience__details">
							<BsBookmarkCheckFill className="experience__details-icon" />
							<div>
								<h4>Truffle / Hardhat</h4>
								<small className="text-align">Experienced</small>
							</div>
						</article>

						{/* skill-3 */}
						<article className="experience__details">
							<BsBookmarkCheckFill className="experience__details-icon" />
							<div>
								<h4>OpenZeppelin /Geth </h4>
								<small className="text-align">Experienced</small>
							</div>
						</article>

						{/* skill-4 */}
						<article className="experience__details">
							<BsBookmarkCheckFill className="experience__details-icon" />
							<div>
								<h4>Metamask</h4>
								<small className="text-align">Experienced</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
