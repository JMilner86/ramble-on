import React from 'react';


export default function About() {
  return (
    <div className='page'>
 
        <div id='aboutTitle'><h2>About Me Page</h2></div>

        <div id='picContainer'>     
      <img id='pic' src={require(`../../images/pic.jpg`)}
            alt={`My wife and Me`}/>
            </div>

    <div>
      <p id='aboutP'>
            Hello! My name is Jonah Milner. I am a full stack web developer that graduated from the Web Development Bootcamp from the University of Utah.
            I discovered a love for writing code and creating new things and decided to pursue a career in Web Development. A little bit about me, my favorite band of all time,
            without a doubt would be Led Zeppelin. Classic rock in general is my favorite genre of music but I'm pretty flexible when it comes to music taste.
            I enjoy a good balance of activities when I'm not coding. I enjoy sports of all kinds, playing and watching them. Hockey would be my favorite to watch,
            with Sumo as an odd second choice, but I do tend to follow most North American sports as well as the UEFA Champions League in Europe. I enjoy outdoor activities,
            like camping and fishing, as well as outdoor sports like skiing and golfing. I am coming from a strictly outdoor work environment, I still enjoy working outside and working with plants and whatnot,
            I'm very much ready for a change though. I also am a gamer, with the Legend of Zelda Majora's Mask, and Elden Ring as my favorite games ever.
            I married the love of my life in 2018. We enjoy watching movies and tv shows and just generally spending time with each other! I wouldn't have made it this far in my career without her support!
      </p>
      </div>



    </div>
  );
}
