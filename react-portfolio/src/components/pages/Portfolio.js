import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <h3>Projects</h3>

    <div id='timeKiller'> 
      <a href="https://nesnah1307.github.io/time-killer-3000/">
        <img src={require(`../../images/time.png`)}
            alt={`Time Killer 3000`}/>Time Killer 3000</a>
      <a href='https://github.com/Nesnah1307/time-killer-3000'>GitHub Repository</a>
        </div>

    <div id='jarvis'>
    <a href='https://mighty-tor-32004.herokuapp.com/'>Jarvis</a>
    <img src={require(`../../images/jarvis.png`)}
         alt={`Jarvis`}/>
    <a href='https://github.com/JMilner86/jarvis'>GitHub Repository</a>
        </div>  

    <div id='weather-app'>
    <a href='https://jmilner86.github.io/weather-app/'>Weather App</a>
    <img src={require(`../../images/weather.png`)}
         alt={`Weather App`}/>
    <a href='https://github.com/JMilner86/weather-app'>GitHub Repository</a>
        </div>

    <div id='readme'>
    <a href='https://jmilner86.github.io/readMe-generator/'>README.md Generator</a>
    <img src={require(`../../images/readme.png`)}
         alt={`README.md Generator`}/>
    <a href='https://github.com/JMilner86/readMe-generator'>GitHub Repository</a>
        </div>

    <div id='quiz'>
    <a href='https://jmilner86.github.io/code-quiz/'>Quiz game</a>
    <img src={require(`../../images/quiz.png`)}
         alt={`Quiz`}/>
    <a href='https://github.com/JMilner86/code-quiz'>GitHub Repository</a>
    </div>

    <div id='first-port'>
    <a href='https://jmilner86.github.io/JMilner-Portfolio/'>First Porfolio</a>
    <img src={require(`../../images/port.png`)}
         alt={`First Portfolio`}/>
    <a href='https://github.com/JMilner86/JMilner-Portfolio'>GitHub Repository</a>
    </div>





    </div>
  );
}