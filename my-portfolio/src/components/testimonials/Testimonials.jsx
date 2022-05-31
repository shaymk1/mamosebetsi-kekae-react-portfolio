import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import './testimonials.css';

const testimonials = [
	/*testimonial-1*/
	{
		id: 1,
		image: AVTR1,
		name: 'Mamo Mapossa',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non quasi tenetur neque quisquam a, amet excepturi eligendi alias aliquam voluptate odio voluptatibus, fugiat aliquid modi, corrupti nemo sed itaque!voluptate odio voluptatibus, fugiat aliquid modi, corrupti nemo sed itaqu ',
	},

	/*testimonial-2*/
	{
		id: 2,
		image: AVTR2,
		name: 'Felicia Mapossa',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non quasi tenetur neque quisquam a, amet excepturi eligendi alias aliquam voluptate odio voluptatibus, fugiat aliquid modi, corrupti nemo sed itaque!voluptate odio voluptatibus, fugiat aliquid modi, corrupti nemo sed itaqu ',
	},

	/*testimonial-3*/
	{
		id: 3,
		image: AVTR3,
		name: 'Thandie Mapossa',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non quasi tenetur neque quisquam a, amet excepturi eligendi alias aliquam voluptate odio voluptatibus, fugiat aliquid modi, corrupti nemo sed itaque!voluptate odio voluptatibus, fugiat aliquid modi, corrupti nemo sed itaqu ',
	},

	/*testimonial-4*/
	{
		id: 4,
		image: AVTR4,
		name: 'Felicia Kekae',
		review:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos non quasi tenetur neque quisquam a, amet excepturi eligendi alias aliquam voluptate odio voluptatibus, fugiat aliquid modi, corrupti nemo sed itaque!voluptate odio voluptatibus, fugiat aliquid modi, corrupti nemo sed itaqu ',
	},
];

const Testimonials = () => {
	return (
		<section>
			<h2>Testimonials</h2>
			<Swiper className="container testimonials__container"
			/*install Swiper modules*/
				modules={[Pagination, Navigation]}
				spaceBetween={40}
				slidesPerView={1}
				navigation pagination={{ clickable: true }}
			>
				
				{/*mapping through an array*/}
				{testimonials.map(({ id, image, name, review }) => {
					return (
						<SwiperSlide key={id} className="testimonial">
							<div className="client__avatar">
								<img className="" src={image} alt="Avatar one" />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
