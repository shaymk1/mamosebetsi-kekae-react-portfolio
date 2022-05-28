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
						<article className="experience__details">
							<BsBookmarkCheckFill />
						</article>
					</div>
				</div>
				<div className="experience__frontend"></div>
			</div>
		</section>
	);
};

export default Skills;
