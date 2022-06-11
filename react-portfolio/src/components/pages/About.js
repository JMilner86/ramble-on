import React from 'react';


export default function About() {
  return (
    <div>
      <h1>About Me Page</h1>
      
      <img src={require(`../../images/pic.jpg`)}
            alt={`My wife and Me`}/>

      <p>
            Hello! My name is Jonah Milner. I am a full stack web developer that graduated from the Web Development Bootcamp from the University of Utah.
            I discovered a love for writing code and creating new things and decided to pursue a career in Web Development. A little bit about me, my favorite band of all time,
            without a doubt would be Led Zeppelin. Classic rock in general is my favorite genre of music but I'm pretty flexible when it comes to music taste.
            I enjoy a good balance of activities when I'm not coding. I enjoy sports of all kinds, playing and watching them. Hockey would be my favorite to watch,
            with Sumo as an odd second choice, but I do tend to follow most North American sports as well as the UEFA Champions League in Europe. I enjoy outdoor activities,
            like camping and fishing, as well as outdoor sports like skiing and golfing. I also am a gamer, with the Legend of Zelda Majora's Mask, and Elden Ring as my favorite games ever.
      </p>
    </div>
  );
}
