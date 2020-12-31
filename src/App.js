import React from 'react';
import Title from './components/title/title';
import StickyNav from './components/nav/stickynav';
import AboutMe from './components/about-me/AboutMe';
import ProjectCardlist from './components/projectcard/projectcardlist';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import projectList from './projectlist';
import './App.css';

function App() {


  return (
    <div>
      <Title/>
      <StickyNav/> 
      <AboutMe id="AboutMe"/>
        <ProjectCardlist projectLists={projectList}/>
      <Contact id="Contact"/>
      <Footer id="Footer"/>
    </div>
  );
}

export default App;
