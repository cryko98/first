
import React, { useState } from 'react';
import { XIcon } from './icons/XIcon';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';

interface AppFooterProps {
  contractAddress: string;
  ticker: string;
}

const AppFooter: React.FC<AppFooterProps> = ({ contractAddress, ticker }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="w-full max-w-2xl mx-auto py-4 px-4 text-center text-gray-500 text-xs">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-white transition-colors"
        >
          <XIcon />
          <span>X</span>
        </a>
        <div className="flex flex-col items-center sm:items-end">
            <div className="flex items-center space-x-2">
              <p className="font-mono truncate">
                ca: {contractAddress}
              </p>
              <button onClick={copyToClipboard} className="hover:text-white transition-colors" title="Copy address">
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
            <p className="font-mono mt-1">{ticker}</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
