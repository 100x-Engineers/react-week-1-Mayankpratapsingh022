import { createContext, useContext, useState } from "react";

const TweetContext = createContext();

export function useTweetContext() {
  return useContext(TweetContext);
}

export function TweetProvider({ children }) {
  const [tweet, setTweet] = useState([{text:"hello",likeCount:0,retweetCount:0}]);


  const addTweet = (newTweet) => {
    newTweet = { ...newTweet, likeCount: 0, retweetCount: 0 };
    setTweet((prevTweets) => [newTweet, ...prevTweets]);
  };


 
  // const addTweet = (newTweet) => {
  //   newTweet = { ...newTweet, likeCount: 0, reTweeet: 0 };

  //   setTweet((previousTweeet) => [newTweet, ...previousTweeet]);
  // };

  const tweetContextValue = {
    addTweet,
    tweet,
  };

  return (
    <TweetContext.Provider value={tweetContextValue}>
      {children}
    </TweetContext.Provider>
  );
}
