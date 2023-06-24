// Why am I not using components for this page? I really should be using components for this page, that is the entire point of react... 


import React from 'react';

export default function Portfolio() {
  return (
    <div className='page'>
      <h2>Projects</h2>


<div id='columns'>
     <div class='column1'>
    <div class='card'> 
      <a href="https://nesnah1307.github.io/time-killer-3000/"><h4 class='projectTitle'>Time Killer 3000</h4>
        <img id='timeKiller' src={require(`../../images/timeKiller.png`)}
            alt={`Time Killer 3000`}/></a>
      <a class="viewGithub" href='https://github.com/Nesnah1307/time-killer-3000'>View on GitHub</a> 
        </div>

    <div class='card'>
    <a href='https://mighty-tor-32004.herokuapp.com/'><h4 class='projectTitle'>Jarvis</h4>
    <img id='jarvis' src={require(`../../images/jarvis.png`)}
         alt={`Jarvis`}/></a>
    <a  class="viewGithub" href='https://github.com/JMilner86/jarvis'>View on GitHub</a>
        </div>  

    <div class='card'>
    <a href='https://jmilner86.github.io/weather-app/'><h4 class='projectTitle'>Weather App</h4>
    <img id='weather-app' src={require(`../../images/weather.png`)}
         alt={`Weather App`}/></a>
    <a class="viewGithub" href='https://github.com/JMilner86/weather-app'>View on GitHub</a>
        </div>
     </div>

     <div class='column2'>
    <div class='card'>
    <a href='https://jmilner86.github.io/readMe-generator/'><h4 class='projectTitle'>README.md Generator</h4>
    <img id='readMe' src={require(`../../images/readme.png`)}
         alt={`README.md Generator`}/></a>
    <a class="viewGithub" href='https://github.com/JMilner86/readMe-generator'>View on GitHub</a>
        </div>

    <div class='card'>
    <a href='https://jmilner86.github.io/code-quiz/'><h4 class='projectTitle'>Quiz game</h4>
    <img id='quiz' src={require(`../../images/quiz.png`)}
         alt={`Quiz`}/></a>
    <a class="viewGithub" href='https://github.com/JMilner86/code-quiz'>View on GitHub</a>
    </div>

    <div class='card'>
    <a href='https://jmilner86.github.io/JMilner-Portfolio/'><h4 class='projectTitle'>First Porfolio</h4>
    <img id='firstPort' src={require(`../../images/port.png`)}
         alt={`First Portfolio`}/></a>
    <a class="viewGithub" href='https://github.com/JMilner86/JMilner-Portfolio'>View on GitHub</a>
    </div>

    <div class='card'>
    <a href='https://regal-help.herokuapp.com/'><h4 class='projectTitle'>Regal</h4>
    <img id='firstPort' src={require(`../../images/screenshot2.png`)}
         alt={`First Portfolio`}/></a>
    <a class="viewGithub" href='https://github.com/BlinkingHeimdall/Regal'>View on GitHub</a>
    </div>
</div>
</div>



    </div>
  );
}