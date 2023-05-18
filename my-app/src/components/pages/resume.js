import React from 'react';
import '../../styles/style.css';
import { BsCloudDownload } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import resume from "../../assets/Resume-HM.pdf";

function Resume() {
    const downloadFile = () => {
        window.open(resume, '_blank');
    };

    return (
        <main className='resume-container'>
            <h1 className="resume-heading">Discover My Career Journey!</h1>
            <p className="resume-intro">
                Want to learn more about my experience, skills, and qualifications? 
                Feel free to download and view my detailed resume below. 
                Let's start a new chapter together!
            </p>
            <div className="download-button-container">
                <button id="download-resume" className="download-resume-button" onClick={downloadFile}> 
                    Download My Resume <FontAwesomeIcon icon={faFilePdf} />
                </button>
            </div>
            <div className="resume-download-spacing">
                <a href={resume} download>
                    <h4 className='resume-h4'><BsCloudDownload className="BsCloudDownload" /> Download Resume</h4>
                </a>
            </div>
        </main>
    );
}

export default Resume;
