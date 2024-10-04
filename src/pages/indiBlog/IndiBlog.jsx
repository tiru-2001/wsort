import React from "react";
import "./IndiBlog.scss";
import { Helmet } from "react-helmet"; // Import Helmet for managing the head
import { blog1, shifali } from "../../assets"; // Import assets

const IndiBlog = () => {
  return (
    <>
      {/* Helmet for setting dynamic metadata */}
      <Helmet>
        <title>Maximize Your Online Presence | Websort Blog</title>
        <meta
          name="description"
          content="Learn how to optimize your website for SEO, leverage social media platforms, and create engaging content to maximize your online presence."
        />
        <meta
          name="keywords"
          content="SEO, social media marketing, content creation, email marketing, online presence, blog tips"
        />
        {/* Open Graph for Social Sharing */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Maximize Your Online Presence with These Tips | Websort Blog"
        />
        <meta
          property="og:description"
          content="Discover actionable tips for enhancing your website's SEO, leveraging social media, and creating engaging content."
        />
        <meta property="og:image" content={blog1} />
        <meta property="og:url" content="https://www.thewebsort.com/blog/seo-tips" />
        {/* Author and Canonical URL */}
        <meta name="author" content="Shifali U" />
        <link rel="canonical" href="https://www.thewebsort.com/blog/seo-tips" />
      </Helmet>

      {/* Blog content */}
      <section className="indiblog-main">
        <section className="indiblog1">
          <h1>Maximize Your Online Presence with These Tips!</h1>
        </section>

        <section className="indiblog2">
          <img src={blog1} alt="blog-image" />
        </section>

        <section className="indiblog3">
          <section className="indiblog3-text">
            <h3>Optimize Your Website for SEO</h3>
            <p>
              Search engine optimization (SEO) is the foundation of online
              visibility. By using relevant keywords, optimizing meta tags, and
              creating high-quality content, you can improve your site's ranking
              on search engines like Google. Ensure your website is mobile
              friendly, loads quickly, and provides a great user experience to
              keep visitors engaged.
            </p>

            <h3>Leverage Social Media Platforms</h3>
            <p>
              Social media is a powerful tool for increasing your reach and
              engaging with your audience. Use platforms like Instagram,
              Facebook, LinkedIn, and Twitter to share valuable content, promote
              products, and interact with followers. Consistency is key—post
              regularly, respond to comments, and use hashtags strategically to
              connect with the right people.
            </p>

            <h3>Create High-Quality, Engaging Content</h3>
            <p>
              Content is king. Blog posts, videos, podcasts, and infographics
              are all great ways to provide value to your audience. Focus on
              creating content that answers your audience's questions, solves
              their problems, or entertains them. High-quality content can
              position you as an expert in your field and drive more traffic to
              your site.
            </p>

            <h3>Utilize Email Marketing</h3>
            <p>
              Email marketing remains one of the most effective ways to nurture
              relationships with your audience. Send regular newsletters with
              personalized content, exclusive offers, or product updates.
              Segment your email list to deliver more targeted content, and
              include clear calls to action (CTAs) to drive conversions.
            </p>
          </section>

          <section className="indiblog-img">
            <img src={shifali} alt="Founder" />
            <h3>Shifali U</h3>
            <p>UI/UX </p>
          </section>
        </section>

        <section className="indiblogLast"></section>
      </section>
    </>
  );
};

export default IndiBlog;
// import React from "react";
// import { useParams } from "react-router-dom";
// import { blogsection } from "../../utilities";
// import {  shifali } from "../../assets";
// import { Helmet } from "react-helmet";
// import "./IndiBlog.scss";

// const IndiBlog = () => {
// 	  const { id } = useParams();
// 		const blog = blogsection.find((item) => item.id === id);

// 		console.log("Requested Blog ID:", id);
// 		console.log("Blog Data:", blog);

// 		if (!blog) {
// 			return <p>Blog not found</p>;
// 		}

// 	return (
// 		<>
// 			<Helmet>
// 				<title>{blog.desc} | Websort Blog</title>
// 				<meta name="description" content={blog.content1.substring(0, 150)} />
// 				{/* Open Graph / Facebook Meta Tags */}
// 				<meta property="og:type" content="article" />
// 				<meta property="og:title" content={${blog.desc} | Websort Blog} />
// 				<meta
// 					property="og:description"
// 					content={blog.content1.substring(0, 150)}
// 				/>
// 				<meta property="og:image" content={blog.img} />{" "}
// 				{/* Add the actual image URL here */}
// 				<meta
// 					property="og:url"
// 					content={https://www.thewebsort.com/blog/${id}}
// 				/>
// 				{/* Canonical URL */}
// 				<link rel="canonical" href={https://www.thewebsort.com/blog/${id}} />
// 				{/* Additional Meta Tags */}
// 				<meta name="robots" content="index, follow" />
// 				<meta name="author" content="Shifali U" />
// 				<meta
// 					name="keywords"
// 					content="SEO tips, social media marketing, content creation, email marketing, online presence, blog tips"
// 				/>
// 			</Helmet>

// 			<section className="indiblog-main">
// 				<section className="indiblog1">
// 					<h1>{blog.desc}</h1>
// 				</section>

// 				<section className="indiblog2">
// 					<img src={blog.img} alt={${blog.desc} - Blog Cover Image} />
// 				</section>

// 				<section className="indiblog3">
// 					<section className="indiblog3-text">
// 						<p>{blog.content1}</p>
// 						<p>{blog.content2}</p>
// 						<p>{blog.content3}</p>
// 						<p>{blog.content4}</p>
// 					</section>
// 					<section className="indiblog-img">
// 						<img src={shifali} alt="UI/UX" />
// 						<h3>Shifali U</h3>
// 						<p>UI/UX </p>
// 					</section>
// 				</section>

// 				<section className="indiblogLast"></section>
// 			</section>
// 		</>
// 	);
// };

// export default IndiBlog;