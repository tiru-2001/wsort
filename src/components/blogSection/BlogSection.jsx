import React from "react";
import "./BlogSection.scss";
import { blogsection } from "../../utilities";
import Carousel from "../carousel/Carousel";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const BlogSection = () => {
	const navigate = useNavigate();

	const handleViewAllClick = () => {
		navigate("/blog");
	};
    const handleBlogItemClick =() =>{
        navigate("/indiBlog");
    }
	useGSAP(() => {
		let t1 = gsap.timeline();
		t1.from(".blogsection-main h1", {
			x: 70,
			opacity: 0,
			duration: 2,
			delay: 0.5,
		});
	});

	const handleBlogImageHover = (imgRef) => {
		gsap.to(imgRef, {
			scale: 1.1,
			duration: 0.5,
			x: 10,
			ease: "power1.out",
			scrub: 1,
		});
	};

	const handleBlogImageHoverOut = (imgRef) => {
		gsap.to(imgRef, {
			scale: 1,
			duration: 0.5,
			x: 0,
			ease: "power1.out",
			scrub: 1,
		});
	};

	return (
		<section className="blog_parent_container">
			<h1>BLOGS.</h1>
			<section className="blog_sub_container">
				<Carousel className="carousel-container">
					{blogsection.map((item) => (
						<section
							className="blog-items"
							key={item.id}
							onMouseEnter={(e) =>
								handleBlogImageHover(e.currentTarget.querySelector("img"))
							}
							onMouseLeave={(e) =>
								handleBlogImageHoverOut(e.currentTarget.querySelector("img"))
							}
                            onClick={()=>handleBlogItemClick()}
						>
							<section className="blog-items-child">
								<img src={item.img} alt={item.desc} />
								
								<section className="desc">
									<p>{item.desc}</p>
								</section>
							</section>
						</section>
					))}
				</Carousel>

				<section className="blog-button">
					<button onClick={handleViewAllClick}>View All</button>
				</section>
			</section>
		</section>
	);
};

export default BlogSection;