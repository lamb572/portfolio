import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectCardlist = ({ projectLists }) => {
  return (
    <div className="section projects" id="ProjectCardlist">
      {
        projectLists.map((user, i) => {
          return (
            <ProjectCard
              image={projectLists[i].image}
              title={projectLists[i].title}
              header={projectLists[i].header}
              info={projectLists[i].info}
              live={projectLists[i].live}
              frontend={projectLists[i].frontend}
              backend={projectLists[i].backend}
              />
          );
        })
      }
    </div>
  );
}

export default ProjectCardlist;