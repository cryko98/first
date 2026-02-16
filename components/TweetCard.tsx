
import React from 'react';
import { ThreeDotsIcon } from './icons/ThreeDotsIcon';

interface TweetCardProps {
  completion: string;
  setCompletion: (value: string) => void;
  onTweet: () => void;
}

const TweetCard: React.FC<TweetCardProps> = ({ completion, setCompletion, onTweet }) => {
  const avatarUrl = "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg";

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onTweet();
    }
  };

  return (
    <div className="bg-black text-white p-4 sm:p-6 border border-gray-800 rounded-2xl w-full max-w-2xl mx-auto shadow-lg shadow-gray-900/50">
      <div className="flex justify-between items-start">
        <div className="flex space-x-3">
          <img src={avatarUrl} alt="Profile Avatar" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-bold text-base leading-tight">First in my bloodline</p>
            <p className="text-gray-500 text-sm leading-tight">@firstofmykind</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-blue-400 transition-colors" aria-label="More options">
          <ThreeDotsIcon />
        </button>
      </div>
      <div className="mt-4 text-2xl sm:text-3xl text-gray-200">
        <p>first in my bloodline to</p>
        <input
          type="text"
          value={completion}
          onChange={(e) => setCompletion(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-400 transition-colors w-full mt-2"
          aria-label="Complete the sentence"
        />
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={onTweet}
          disabled={!completion.trim()}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 disabled:scale-100"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetCard;
