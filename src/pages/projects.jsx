import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";
import TypewriterText from "../components/common/typewriterText";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<div className="content-wrapper">
					<div className="projects-container">
						<TypewriterText text="Building things that matter." className="title projects-title" />

						<div className="subtitle projects-subtitle">
							A mix of business ventures and technical tools — from
							founding and scaling companies in Brazil to building
							secure AI infrastructure and open-source tooling in
							the Netherlands.
						</div>

						<div className="projects-list">
							<AllProjects technicalFirst={true} />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
