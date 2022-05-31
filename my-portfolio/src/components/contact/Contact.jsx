// import { AiOutlineInstagram } from 'react-icons/ai';
// import { RiMessengerLineMdEmail } from 'react-icons/ri';
// import emailjs from '@emailjs/browser';
// import React, { useRef } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
	return (
		<section id="contact">
			<h5>Please Get In Touch!</h5>
			<h2>Contact Me</h2>
			<div className=" container contact__container">
				<div className="contact__options">
					{/*option-1*/}
					<article className="contact__option">
						<MdEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>mkekae@gmail.com</h5>
						<a href="mailto:mkekae@gmail.com" target="_blank" rel="noreferrer">
							Send a Message!
						</a>
					</article>
					<article className="contact__option">
						<AiFillLinkedin className="contact__option-icon" />
						<h4>FillLinkedin</h4>
						<h5>Mamosebetsi Kekae</h5>
						<a
							href="https://facebook.com/mamo"
							target="_blank"
							rel="noreferrer"
						>
							Send a Message!
						</a>
					</article>
					<article className="contact__option">
						<AiFillGithub className="contact__option-icon" />
						<h4>Github</h4>
						<h5>Catch Me on Github</h5>
						<a href="mailto:mkekae@gmail.com" target="_blank" rel="noreferrer">
							Send a Message!
						</a>
					</article>
				</div>
				{/*form*/}
				{/*onSubmit={sendEmail}*/}
				<form ref="form">
					<input type="text" name="name" placeholder="Full Name" required />
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;

// const form = useRef();

// const sendEmail = (e) => {
// 	e.preventDefault();

// 	emailjs
// 		.sendForm(
// 			'service_of3ui8b',
// 			'template_ia1giu9',
// 			form.current,
// 			'XoQVZCuV5gDCytjEX'
// 		)
// 		.then(
// 			(result) => {
// 				console.log(result.text);
// 			},
// 			(error) => {
// 				console.log(error.text);
// 			}
// 		);
// 	e.target.reset();
// };

/*option-2*/

/*option-3*/

// <article className="contact__option">
// 	<RiMessengerLineMdEmail />
// 	<h4>Messenger</h4>
// 	<h5>Mamosebetsi Kekae</h5>
// 	<a href="https://facebook.com/mamo">Send a Message!</a>
// </article>;
// <article className="contact__option">
// 	<AiOutlineInstagram />
// 	<h4>Email</h4>
// 	<h5>mkekae@gmail.com</h5>
// 	<a href="mailto:mkekae@gmail.com">Send a Message!</a>
// </article>;
