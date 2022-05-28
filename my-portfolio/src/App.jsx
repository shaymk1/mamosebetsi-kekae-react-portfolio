import About from 'components/about/About.components.';
import Contact from 'components/contact/Contact.components';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Nav from 'components/nav/Nav';
import Portfolio from 'components/portfolio/Portfolio';
import Projects from 'components/projects/Projects';
import Skills from 'components/skills/Skills';
import Testimonials from 'components/testimonials/Testimonials';
import React, { Fragment } from 'react';

const App = () => {
	return (
		<Fragment>
			<div>
				<Header />
				<Nav />
				<About />
				<Skills />
				<Projects />
				<Portfolio />
				<Testimonials />
				<Contact />
				<Footer />
			</div>
		</Fragment>
	);
};

export default App;
