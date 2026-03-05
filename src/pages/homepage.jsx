import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import CvDownload from "../components/common/cvDownload";
import TypewriterText from "../components/common/typewriterText";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const [titleOpacity, setTitleOpacity] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPos = window.scrollY;
			// Quickly fade out the title as it scrolls up towards the nav/logo area
			const newOpacity = Math.max(0, 1 - (scrollPos / 150));
			setTitleOpacity(newOpacity);
		};

		window.scrollTo(0, 0);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<script type="application/ld+json">
					{`
						{
							"@context": "https://schema.org",
							"@type": "ProfilePage",
							"mainEntity": {
								"@type": "Person",
								"name": "${INFO.main.name}",
								"jobTitle": "MLOps & Platform Engineer",
								"description": "${INFO.homepage.description.join('. ')}",
								"url": "https://murilopmachado.github.io",
								"sameAs": [
									"${INFO.socials.linkedin}",
									"${INFO.socials.github}"
								]
							}
						}
					`}
				</script>
			</Helmet>

			<div className="page-content">
				<main className="content-wrapper">
					<div className="homepage-container">
						<TypewriterText text={INFO.homepage.title} className="title homepage-title" style={{ opacity: titleOpacity }} />
						<TypewriterText
							items={INFO.homepage.subtitle}
							as="h2"
							className="homepage-subtitle-typewriter"
							speed={40}
							delay={1500}
						/>

						<header className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<ul className="homepage-description-list">
									{INFO.homepage.description.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>

								<div className="homepage-highlight">
									{INFO.homepage.note}
								</div>

								<div style={{ marginTop: "30px" }}>
									<CvDownload />
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="murilo_portrait.jpg"
											alt="Murilo Machado"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</header>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<section className="homepage-projects">
							<h2 className="sr-only" style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", border: 0 }}>Projects and Ventures</h2>
							<AllProjects />
						</section>

						<section className="homepage-after-title">
							<div className="homepage-works">
								<Works />
							</div>
						</section>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</main>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
