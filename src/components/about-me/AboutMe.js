import React from 'react';

function AboutMe({id}) {
    const myInfo = "After a career in the British Army, I am now using knowledge learned through extra studies, to increase my experience and build up this portfolio to move into a new career as a Frontend Web Developer. \nMy current skills come from online class’s, most recently I have studied using the course 'The Complete Web Developer in 2021: Zero to Mastery' by Andrei Neagoie. \nMy current focus is to increase my knowledge and experience by building front end web pages using React. \nI also have a basic understanding in backend development using NodeJS and writing scripts in Python, some examples are held within my GitHub repositories. My LinkedIn page contains some more information on qualifications and experiences I hold. \nPlease see below the current live projects I’ve built"


    let newInfo = myInfo.split('\n').map(i => {
        return <p>{i}</p>
      });


    return (
        <div className="section" id={id} >
            <h1>About Me</h1>
            <div className="Am">
                <p>
                {newInfo}
                </p>
            </div>
            
        </div>
    );
  }
  
  export default AboutMe;