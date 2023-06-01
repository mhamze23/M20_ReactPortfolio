import React from 'react';
import '../../styles/style.css';
import { BsCloudDownload } from "react-icons/bs";
import resume from "../../assets/Resume-HM.pdf";

// Separate component for the Download button
const DownloadButton = ({ onClick }) => (
    <button 
        id='download-resume' 
        className='btn btn-primary mb-3' 
        onClick={onClick}
    > 
        <BsCloudDownload /> Download Resume
    </button>
);

const Resume = () => {
    const downloadFile = () => {
        window.open(resume, '_blank');
    };

    return (
        <main className='resume-container container py-5'>
            <div className='text-center'>
                <h1 className='resume-heading display-4 mb-4'>My Career Journey</h1>
                <p className='resume-intro lead mb-4'>
                    Explore my qualifications, skills, and experiences in more detail.
					<br /><br /> 
                    Download my resume and let's embark on a new journey together!
                </p>
                <div className='download-button-container d-flex justify-content-center'>
                    <DownloadButton onClick={downloadFile} />
                </div>
            </div>
        </main>
    );
}

export default Resume;
