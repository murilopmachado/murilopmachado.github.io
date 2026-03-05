import React from "react";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const SKILLS = [
	// AI / MLOps
	{ label: "NVIDIA DGX", category: "ai" },
	{ label: "vLLM", category: "ai" },
	{ label: "Ollama", category: "ai" },
	{ label: "Open WebUI", category: "ai" },
	{ label: "distilabel", category: "ai" },
	{ label: "LLM-as-a-Judge", category: "ai" },
	{ label: "Synthetic Data Generation", category: "ai" },
	{ label: "Hugging Face Datasets", category: "ai" },
	{ label: "Firecrawl Self-hosted", category: "ai" },
	{ label: "trafilatura", category: "ai" },
	{ label: "MinHash Deduplication", category: "ai" },
	{ label: "PII Sanitization", category: "ai" },
	{ label: "Parquet", category: "ai" },
	{ label: "DeepHat LLM", category: "ai" },

	// Security / AppSec
	{ label: "SAST", category: "security" },
	{ label: "DAST", category: "security" },
	{ label: "SCA", category: "security" },
	{ label: "Checkmarx", category: "security" },
	{ label: "Semgrep", category: "security" },
	{ label: "SonarQube", category: "security" },
	{ label: "TFSec", category: "security" },
	{ label: "Trivy", category: "security" },
	{ label: "Clair", category: "security" },
	{ label: "Burp Suite", category: "security" },
	{ label: "Caido", category: "security" },
	{ label: "Naabu", category: "security" },
	{ label: "DefectDojo", category: "security" },
	{ label: "Secret Scanning", category: "security" },
	{ label: "Secure SDLC", category: "security" },
	{ label: "Threat Modeling (STRIDE)", category: "security" },
	{ label: "Zero-Trust Networking", category: "security" },
	{ label: "SSO (SAML/OIDC)", category: "security" },
	{ label: "ISO27001", category: "security" },

	// Platform / Infrastructure
	{ label: "Kubernetes", category: "platform" },
	{ label: "Helm", category: "platform" },
	{ label: "Terraform", category: "platform" },
	{ label: "Pulumi", category: "platform" },
	{ label: "Bicep", category: "platform" },
	{ label: "ArgoCD", category: "platform" },
	{ label: "GitOps", category: "platform" },
	{ label: "Docker", category: "platform" },
	{ label: "NetBird / WireGuard", category: "platform" },
	{ label: "Nginx", category: "platform" },
	{ label: "Hetzner", category: "platform" },
	{ label: "AWS", category: "platform" },
	{ label: "Azure", category: "platform" },
	{ label: "GCP", category: "platform" },
	{ label: "Dynamic Secret Management", category: "platform" },

	// CI/CD
	{ label: "GitHub Actions", category: "cicd" },
	{ label: "GitLabCI", category: "cicd" },
	{ label: "Jenkins", category: "cicd" },
	{ label: "Azure Pipelines", category: "cicd" },
	{ label: "CircleCI", category: "cicd" },
	{ label: "BitRise", category: "cicd" },
	{ label: "TravisCI", category: "cicd" },
	{ label: "Bamboo", category: "cicd" },

	// QA / Testing
	{ label: "Cypress", category: "qa" },
	{ label: "Playwright", category: "qa" },
	{ label: "Selenium", category: "qa" },
	{ label: "Appium", category: "qa" },
	{ label: "Puppeteer", category: "qa" },
	{ label: "Protractor", category: "qa" },
	{ label: "XCUITest", category: "qa" },
	{ label: "Espresso", category: "qa" },
	{ label: "BDD/Cucumber", category: "qa" },
	{ label: "JMeter", category: "qa" },
	{ label: "K6", category: "qa" },
	{ label: "Gatling", category: "qa" },
	{ label: "BlazeMeter", category: "qa" },
	{ label: "BrowserStack", category: "qa" },
	{ label: "SauceLabs", category: "qa" },
	{ label: "HP LoadRunner", category: "qa" },

	// Languages
	{ label: "Go", category: "lang" },
	{ label: "Python", category: "lang" },
	{ label: "JavaScript", category: "lang" },
	{ label: "Node.js", category: "lang" },
	{ label: "Ruby", category: "lang" },
	{ label: "Bash/Shell", category: "lang" },
];

const CATEGORY_COLORS = {
	ai: { bg: "rgba(234, 78, 0, 0.12)", border: "rgba(234, 78, 0, 0.5)", text: "#ea7a40" },
	security: { bg: "rgba(239, 68, 68, 0.1)", border: "rgba(239, 68, 68, 0.4)", text: "#f87171" },
	platform: { bg: "rgba(99, 102, 241, 0.1)", border: "rgba(99, 102, 241, 0.4)", text: "#a78bfa" },
	cicd: { bg: "rgba(16, 185, 129, 0.1)", border: "rgba(16, 185, 129, 0.4)", text: "#34d399" },
	qa: { bg: "rgba(234, 179, 8, 0.1)", border: "rgba(234, 179, 8, 0.4)", text: "#facc15" },
	lang: { bg: "rgba(56, 189, 248, 0.1)", border: "rgba(56, 189, 248, 0.4)", text: "#7dd3fc" },
};

const Works = () => {
	return (
		<section className="works" aria-labelledby="skills-heading">
			<h3 id="skills-heading" className="sr-only" style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", border: 0 }}>Skills and Tools Experience</h3>
			<Card
				icon={faLayerGroup}
				title="Skills & Tools"
				body={
					<ul className="skills-cloud" aria-label="Professional Skills and Tools">
						{SKILLS.map((skill, i) => {
							const colors = CATEGORY_COLORS[skill.category];
							return (
								<li
									key={i}
									className="skill-tag"
									style={{
										background: colors.bg,
										border: `1px solid ${colors.border}`,
										color: colors.text,
										listStyle: "none"
									}}
								>
									{skill.label}
								</li>
							);
						})}
					</ul>
				}
			/>
		</section>
	);
};

export default Works;
