
import React, { useState, useCallback } from 'react';
import TweetCard from './components/TweetCard';
import AppFooter from './components/AppFooter';

const App: React.FC = () => {
  const [completion, setCompletion] = useState<string>('');
  
  const contractAddress = "xxxxxxxxxxxxxxxxxxxxxxxxxx";
  const ticker = "$FIRST";

  const handleTweet = useCallback(() => {
    if (completion.trim() === '') {
        alert('Please fill in what you are the first in your bloodline to do!');
        return;
    }

    const tweetText = `first in my bloodline to ${completion}\n\nca: ${contractAddress}\n${ticker}`;
    const encodedTweetText = encodeURIComponent(tweetText);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTweetText}`;

    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  }, [completion, contractAddress, ticker]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4 selection:bg-blue-500 selection:text-white">
      <main className="flex-grow flex items-center justify-center w-full">
        <TweetCard
          completion={completion}
          setCompletion={setCompletion}
          onTweet={handleTweet}
        />
      </main>
      <AppFooter contractAddress={contractAddress} ticker={ticker} />
    </div>
  );
};

export default App;
