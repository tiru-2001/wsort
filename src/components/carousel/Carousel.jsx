import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Carousel.scss";
gsap.registerPlugin(ScrollTrigger);

function Carousel({ children }) {
	useGSAP(() => {
		gsap.to(".slider-container", {
			x: -300,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: ".slider-container",
				start: "top 22%",
				end: "top -220%",
				scrub: 2,
				pin: true,
				// markers: true,
			},
		});
	});
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					speed: 3000,
					autoplaySpeed: 3000,
					cssEase: "linear",
					autoplay: true,
				},
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					speed: 3000,
					autoplaySpeed: 3000,
					cssEase: "linear",
					autoplay: true,
				},
			},
		],
	};

	return (
		<div className="slider-container">
			<Slider {...settings}>{children}</Slider>
		</div>
	);
}

export default Carousel;