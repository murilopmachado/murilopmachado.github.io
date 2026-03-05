import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";

import "./styles/cvDownload.css";

const CvDownload = () => {
    return (
        <div className="cv-download-wrapper">
            <a
                href="/Murilo_Machado_CV.pdf"
                download="Murilo_Machado_CV.pdf"
                className="cv-download-box"
                aria-label="Download Murilo Machado's CV"
            >
                <div className="cv-download-icon">
                    <FontAwesomeIcon icon={faFilePdf} className="cv-pdf-icon" />
                </div>
                <div className="cv-download-content">
                    <div className="cv-download-title">Download my CV</div>
                    <div className="cv-download-subtitle">
                        MLOps · Platform Engineer · DevSecOps · QA
                    </div>
                </div>
                <div className="cv-download-action">
                    <FontAwesomeIcon
                        icon={faDownload}
                        className="cv-download-arrow"
                    />
                </div>
            </a>
        </div>
    );
};

export default CvDownload;
