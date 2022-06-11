import React from 'react';
import pdf from '../../pdf/Jonah Milner resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div>
      <a href={pdf} target="_blank" rel="noreferrer">
        My Resume pdf
      </a>
    </div>

    <ul>
        <h2>Proficiencies</h2>
        <li><h3>JavaScript</h3></li>
        <li><h3>Node.js</h3></li>
        <li><h3>HTML, CSS</h3></li>
        <li><h3>React</h3></li>
        <li><h3>SQL, NoSQL, MongoDB</h3></li>
        <li><h3>MERN stack</h3></li>
    </ul>
    </div>
  );
}