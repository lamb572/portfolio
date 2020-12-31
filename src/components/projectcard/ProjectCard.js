import React from 'react';
import Tilt from 'react-tilt';
import './projectcard.css';

const ProjectCard = ({ title, header, info, image, live, frontend, backend}) => {

  let newText = info.split('\n').map(i => {
    return <p>{i}</p>
});



  return (
    <div className='project-card'>
      <div>
        <Tilt className="Tilt" options={{ max : 25 }} >
          <a className="Tilt-inner" target="_blank" rel="noreferrer" href="https://desolate-ocean-20239.herokuapp.com/">  
          <img alt='project' src={image}/>
          </a>
        </Tilt>
        <script src="jquery.js" ></script> 
        <script src="tilt.js"></script>
      </div>
      <div>
        <h3>{title}</h3>
        <h4>{header}</h4>
        <p>{newText}</p>
      </div>
      <div className="links">
        <a className="button" target="_blank" rel="noreferrer" href={live}>
        See Live
        </a>
        <a className="button" target="_blank" rel="noreferrer"  href={frontend}>
        Front End Source Code
        </a>
        <a className="button" target="_blank" rel="noreferrer" href={backend}>
        Back End Source Code
        </a>
      </div>
    </div>
  );
}



export default ProjectCard;


