import React from 'react';

export default function Portfolio() {
  return (
    <div className='page'>
      <h2>Projects</h2>


    <div id=''> 
      <a href="https://nesnah1307.github.io/time-killer-3000/"><h4>Time Killer 3000</h4>
        <img id='timeKiller' src={require(`../../images/time.png`)}
            alt={`Time Killer 3000`}/></a>
      <a href='https://github.com/Nesnah1307/time-killer-3000'><h5>GitHub Repository</h5></a>
        </div>

    <div id=''>
    <a href='https://mighty-tor-32004.herokuapp.com/'><h4>Jarvis</h4>
    <img id='jarvis' src={require(`../../images/jarvis.png`)}
         alt={`Jarvis`}/></a>
    <a href='https://github.com/JMilner86/jarvis'><h5>GitHub Repository</h5></a>
        </div>  

    <div id=''>
    <a href='https://jmilner86.github.io/weather-app/'><h4>Weather App</h4>
    <img id='weather-app' src={require(`../../images/weather.png`)}
         alt={`Weather App`}/></a>
    <a href='https://github.com/JMilner86/weather-app'><h5>GitHub Repository</h5></a>
        </div>

    <div id=''>
    <a href='https://jmilner86.github.io/readMe-generator/'><h4>README.md Generator</h4>
    <img id='readMe' src={require(`../../images/readme.png`)}
         alt={`README.md Generator`}/></a>
    <a href='https://github.com/JMilner86/readMe-generator'><h5>GitHub Repository</h5></a>
        </div>

    <div id=''>
    <a href='https://jmilner86.github.io/code-quiz/'><h4>Quiz game</h4>
    <img id='quiz' src={require(`../../images/quiz.png`)}
         alt={`Quiz`}/></a>
    <a href='https://github.com/JMilner86/code-quiz'><h5>GitHub Repository</h5></a>
    </div>

    <div id=''>
    <a href='https://jmilner86.github.io/JMilner-Portfolio/'><h4>First Porfolio</h4>
    <img id='firstPort' src={require(`../../images/port.png`)}
         alt={`First Portfolio`}/></a>
    <a href='https://github.com/JMilner86/JMilner-Portfolio'><h5>GitHub Repository</h5></a>
    </div>





    </div>
  );
}