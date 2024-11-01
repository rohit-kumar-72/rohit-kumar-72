import React from 'react';
import Heading from '../common/Heading';
import { resumeLink } from '@/data.json';
import { CloudDownload } from 'lucide-react';

function Resume() {

    function getDownloadLink(shareLink) {
        // Check if the link is a valid Google Drive share link
        const regex = /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view\?usp=sharing/;
        const match = shareLink.match(regex);

        // If the share link matches the format, create a direct download link
        if (match && match[1]) {
            const fileId = match[1];
            return `https://drive.google.com/uc?export=download&id=${fileId}`;
        } else {
            console.error("Invalid Google Drive link format.");
            return null;
        }
    }

    let previewLink = resumeLink;
    let downloadLink = getDownloadLink(resumeLink);

    // Replace the unwanted part of the URL
    if (previewLink.includes("/view?usp=sharing")) {
        previewLink = previewLink.replace("/view?usp=sharing", "/preview");
    }

    return (
        <div id='resume'>
            <Heading text1='Resume' />

            <div className=" flex flex-col items-center justify-evenly overflow-hidden gap-4 p-4">
                <a href={downloadLink} download="Rohit-kumar.pdf" className="px-4 py-2 rounded-md bg-gradient-to-r from-[#06b6d4] via-[#0ea5e9] to-[#3b82f6] text-white hover:scale-125 hover:shadow-sm hover:ease-in-out hover:transition-all duration-150 w-40">
                    <p className='font-mono flex gap-2 w-full'>
                        <CloudDownload className='size-6' />
                        <span>Get a copy</span>
                    </p>
                </a>
                <iframe src={previewLink} height="480" allow="autoplay" className='rounded-md overflow-hidden border-4 md:border-8 border-black w-full md:w-[640px]'></iframe>
            </div>
        </div>
    );
}

export default Resume;
