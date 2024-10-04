import React from "react";
import "./Blog.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { blogsection } from "../../utilities";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"; 

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
	  const navigate = useNavigate();
const handleReadBlogClick = () => {
	navigate("/indiBlog");
};
	useGSAP(() => {
		gsap.from(".blog-top h1,.blog-top p", {
			x: 100,
			duration: 1,
			delay: 0.3,
			opacity: 0,
			stagger: {
				amount: 0.4,
			},
		});

		const imageContainers = gsap.utils.toArray(".blog-item .image-container");
		const descriptions = gsap.utils.toArray(".blog-item .description");

		
		imageContainers.forEach((item) => {
			gsap.from(item, {
				x: -150,
				opacity: 0,
				duration: 0.5,
				scrollTrigger: {
					trigger: item, 
					start: "top 90%", 
					end: "top 60%",
					scrub: 2,
				},
			});
		});

	
		descriptions.forEach((item) => {
			const elementsToAnimate = gsap.utils.toArray("p, button", item); // Select both p and button inside each description

			gsap.from(elementsToAnimate, {
				x: 150,
				opacity: 0,
				duration: 0.5,
				stagger: 0.2, 
				scrollTrigger: {
					trigger: item,
					start: "top 80%",
					end: "top 60%",
					scrub: 2,
				},
			});
		});
	})
	return (
		<>
			<Helmet>
				<title>Blog | Websort - Insights and Updates on IT Solutions</title>
				<meta
					name="description"
					content="Explore the Websort blog for the latest insights, updates, and expert advice on IT solutions, technology trends, and industry best practices."
				/>

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Blog | Websort - Insights and Updates on IT Solutions"
				/>
				<meta
					property="og:description"
					content="Explore the Websort blog for the latest insights, updates, and expert advice on IT solutions, technology trends, and industry best practices."
				/>
				<meta property="og:url" content="https://www.thewebsort.com/blog" />
				<meta
					property="og:image"
					content="https://www.thewebsort.com/assets/blog-thumbnail.jpg" // Update with an actual image URL
				/>

				{/* Canonical Link */}
				<link rel="canonical" href="https://www.thewebsort.com/blog" />

				{/* Additional Meta Tags */}
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Websort Blog Team" />
				<meta
					name="keywords"
					content="Websort blog, IT solutions, technology insights, industry updates, tech trends, IT advice"
				/>
			</Helmet>

			<section className="blog">
				<section className="blog-top">
					<h1>Our Blogs</h1>
					<p>
						Explore the latest insights and updates from our team of experts.
					</p>
				</section>

				<section className="blog-section">
					{blogsection.map((item) => (
						<section className="blog-item" key={item.id}>
							<section className="image-container">
								<img src={item.img} alt={item.desc} />
							</section>
							<section className="description">
								<p>{item.desc}</p>
								<button onClick={handleReadBlogClick} className="read-btn">
									Read Blog
								</button>
							</section>
						</section>
					))}
				</section>
				<section className="blog-bottom"></section>
			</section>
		</>
	);
};

export default Blog;