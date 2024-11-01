import { Check, Copy } from 'lucide-react';
import React, { useState } from 'react';
import HyperText from '../ui/hyper-text';

function JsonDisplay({ data }) {
    const { username, password } = data;

    const [isUsernameCopied, setIsUsernameCopied] = useState(false);
    const [isPasswordCopied, setIsPasswordCopied] = useState(false);

    const copyToClipboard = (text, setCopied) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <pre className="text-xs text-gray-200 bg-gray-800 p-2 rounded space-y-1">
            <div className="flex gap-1 items-center">
                <span className="text-cyan-400">"username/email": </span>
                <span className="text-green-400">"{username}"</span>
                <button
                    onClick={() => copyToClipboard(username, setIsUsernameCopied)}
                    className="ml-2 text-sm text-blue-500 hover:underline"
                >
                    {isUsernameCopied ? <Check className='size-3' /> : <Copy className='size-3' />}
                </button>
            </div>
            <div className="flex gap-1 items-center">
                <span className="text-cyan-400">"password": </span>
                <span className="text-green-400">
                    {username ? <HyperText text={`"${password}"`} duration={1000} /> : ("")}
                </span>
                <button
                    onClick={() => copyToClipboard(password, setIsPasswordCopied)}
                    className="ml-2 text-sm text-blue-500 hover:underline"
                >
                    {isPasswordCopied ? <Check className='size-3' /> : <Copy className='size-3' />}
                </button>
            </div>
        </pre>
    );
}

export default JsonDisplay;
