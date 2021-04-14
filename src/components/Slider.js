import axios from 'axios';
import { useState, useEffect } from 'react';
import Carousel from 'react-grid-carousel'
import Users from './Users';

function Slider () {
  const [tweets, setTweets] = useState([]);
  
  useEffect(() => {
    axios.get("./tweets.json")
    .then(response => {
      setTweets(response.data);
    });
  }, [setTweets])


  return (
    <div>
      
      <Carousel cols={5} rows={1} gap={10} loop showDots={true}>
        {tweets.map(tweet => {
          return (
          <Carousel.Item key={tweet.id}>
            <Users user={tweet.image} name={tweet.name} twitter={tweet.twitter} content={tweet.content} />
          </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
  
}

export default Slider;