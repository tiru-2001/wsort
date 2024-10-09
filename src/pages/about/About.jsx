import "./about.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { mission } from "../../assets";
import { team } from "../../utilities";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const navigate = useNavigate();

	useGSAP(() => {
		gsap.to(".about_section1 .content", {
			top: 0,
			duration: 1,
			ease: "back",
			scrollTrigger: {
				trigger: ".about_section1 .content",
				start: "top 35%",
				end: "top 10%",
				scrub: 2,
			},
		});
	});

	const goToBlog = () => {
		navigate("/blog");
	};

	return (
		<>
			<Helmet>
				<title>About Us | Websort - Your IT Solutions Partner</title>
				<meta
					name="description"
					content="Learn more about Websort, our mission, vision, and the team behind our success. We are dedicated to providing top-notch IT solutions and services."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="About Us | Websort - Your IT Solutions Partner"
				/>
				<meta
					property="og:description"
					content="Learn more about Websort, our mission, vision, and the team behind our success. We are dedicated to providing top-notch IT solutions and services."
				/>
				<meta property="og:url" content="https://www.thewebsort.com/about" />
				<link rel="canonical" href="https://www.thewebsort.com/about" />
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Websort" />
				<meta
					name="keywords"
					content="about Websort, IT solutions company, IT services, software development, web development, IT team, Websort mission"
				/>
			</Helmet>
			<section className="about">
				<section className="about_section1">
					<section className="content">
						<h1>
							About <span>Us</span>
						</h1>
					</section>
				</section>
				<section className="about_section2">
					<h2>
						Our <span>Mission</span>
					</h2>
					<section className="section2_content">
						<section className="left">
							<img src={mission} alt="Website Development" loading="lazy" />
						</section>
						<section className="right">
							<p>
								At Websort, we turn ideas into exceptional digital experiences.
								We offer top-notch web design, web development, and UI/UX app
								development services to help businesses succeed in the digital
								world. Our team of creative designers, skilled developers, and
								strategic thinkers work closely with clients to understand their
								needs and deliver custom solutions that exceed expectations. We
								focus on creating functional, beautiful, and user-friendly
								digital products. With a commitment to innovation and
								excellence, we build strong partnerships with our clients to
								help them achieve their goals and shine in the digital
								landscape. At websort, your success is our mission.
							</p>
						</section>
					</section>
				</section>
				<section className="about_section3">
					<h2>Team</h2>
					<section className="section3_content">
						{team.map((item) => (
							<section className="members" key={item.name}>
								<section className="top">
									<LazyLoad height={200} offset={100}>
										<img src={item.img} alt={item.name} />
									</LazyLoad>
								</section>
								<section className="bottom">
									<h3>{item.name}</h3>
									<p>{item.role}</p>
								</section>
							</section>
						))}
					</section>
				</section>
				<section className="about_section4">
					<h1>Explore our blogs here</h1>
					<button onClick={goToBlog}>GoTo Blog</button>
				</section>
				<section className="about_section5"></section>
			</section>
		</>
	);
};

export default About;
